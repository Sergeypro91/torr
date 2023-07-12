import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash-es';
import { useAppStore, useRouteStore } from '@/stores';
import { getImageTitle } from '@/utils';
import { SelectElement } from '@/types';

export const useBackground = () => {
    const [blur, setBlur] = useState(false);
    const [assets, setAssets] = useState<SelectElement[]>([]);
    const [renderTrailer, setRenderTrailer] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false);
    const setParams = useRouteStore((state) => state.setParams);
    const { pathName } = useRouteStore((state) => state.route);
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const data = useAppStore((state) => state.data);

    const title = useMemo(() => {
        return selectedAsset ? getImageTitle(selectedAsset) : '';
    }, [selectedAsset]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const addNewAsset = useCallback(
        debounce((assetData: SelectElement) => {
            setAssets((prevState) => {
                const assetIds = prevState.map(
                    (asset) => `${asset.tmdbId}${asset.mediaType}`,
                );
                const isNewAssetExist = assetIds.includes(
                    `${assetData.tmdbId}${assetData.mediaType}`,
                );

                return isNewAssetExist ? prevState : [assetData, ...prevState];
            });
        }, 600),
        [],
    );

    const scaleAppToWatchTrailer = useCallback(() => {
        const appRef = document.querySelector('#app') as HTMLDivElement;

        if (appRef) {
            appRef.style.cssText = showTrailer
                ? 'opacity: 0; transition: opacity 5s;'
                : 'opacity: 1;';
        }
    }, [showTrailer]);

    const leaveNewAsset = () => {
        setAssets((prevState) => [prevState[0]]);
    };

    const onTrailerStart = () => {
        setShowTrailer(true);
    };

    const onTrailerEnd = () => {
        setShowTrailer(false);
    };

    const onTrailerError = () => {
        setRenderTrailer(false);
    };

    useEffect(() => {
        const blurBackgroundTimeout = setTimeout(() => {
            setBlur(Boolean(pathName));
        }, 300);

        return () => {
            clearTimeout(blurBackgroundTimeout);
        };
    }, [pathName]);

    useEffect(() => {
        if (selectedAsset) {
            addNewAsset(selectedAsset);
        }
    }, [selectedAsset, addNewAsset]);

    useEffect(() => {
        setParams({ selectedAssetId: selectedAsset?.focusId ?? '' });
    }, [selectedAsset, setParams]);

    useEffect(() => {
        if (assets.length > 1) {
            setTimeout(() => {
                leaveNewAsset();
            }, 600);
        }

        const renderTrailerTimeout = setTimeout(() => {
            setRenderTrailer(true);
        }, 5000);

        setRenderTrailer(false);
        setShowTrailer(false);

        return () => {
            clearTimeout(renderTrailerTimeout);
        };
    }, [assets]);

    useEffect(() => {
        scaleAppToWatchTrailer();
    }, [scaleAppToWatchTrailer]);

    return {
        blur,
        assets,
        title,
        data,
        renderTrailer,
        showTrailer,
        onTrailerStart,
        onTrailerEnd,
        onTrailerError,
    };
};
