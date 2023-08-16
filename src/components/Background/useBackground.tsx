import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    KeyboardEvent,
} from 'react';
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
    const ref = useRef<HTMLDivElement>(null);

    const title = useMemo(() => {
        return selectedAsset ? getImageTitle(selectedAsset) : '';
    }, [selectedAsset]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const showPreview = useCallback(
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

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (['Escape'].includes(event.code)) {
            event.stopPropagation();
        }

        switch (event.code) {
            case 'Escape':
                setShowTrailer(false);
                setRenderTrailer(false);
                return;
            default:
                return;
        }
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
            showPreview(selectedAsset);
        } else {
            setAssets([]);
        }
    }, [selectedAsset, showPreview]);

    useEffect(() => {
        setParams({ selectedAssetId: selectedAsset?.focusId ?? '' });
    }, [selectedAsset, setParams]);

    useEffect(() => {
        if (assets.length > 1) {
            setTimeout(() => {
                leaveNewAsset();
            }, 600);
        }

        const showTrailerTimeout = setTimeout(() => {
            setRenderTrailer(true);
        }, 5000);

        setRenderTrailer(false);
        setShowTrailer(false);

        return () => {
            clearTimeout(showTrailerTimeout);
        };
    }, [assets]);

    useEffect(() => {
        scaleAppToWatchTrailer();
    }, [scaleAppToWatchTrailer]);

    return {
        ref,
        blur,
        assets,
        title,
        data,
        renderTrailer,
        showTrailer,
        onTrailerStart,
        onTrailerEnd,
        onTrailerError,
        handleKeyDown,
    };
};
