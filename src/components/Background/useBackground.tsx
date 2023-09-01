import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash-es';
import { useAppStore, useBackgroundStore, useRouteStore } from '@/stores';
import { getImageTitle } from '@/utils';
import { MovieSlim, SelectElement, TvSlim } from '@/types';

export const useBackground = () => {
    const [blur, setBlur] = useState(false);
    const [assets, setAssets] = useState<SelectElement[]>([]);
    const setParams = useRouteStore((state) => state.setParams);
    const { pathName } = useRouteStore((state) => state.route);
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const data = useAppStore((state) => state.data);
    const setVideoUrl = useBackgroundStore((store) => store.setVideoUrl);
    const isPlaying = useBackgroundStore((store) => store.isPlaying);

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

    const leaveNewAsset = () => {
        setAssets((prevState) => [prevState[0]]);
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
            setVideoUrl((selectedAsset as MovieSlim | TvSlim)?.trailer || null);
        } else {
            setAssets([]);
        }
    }, [selectedAsset, setVideoUrl, showPreview]);

    useEffect(() => {
        setParams({ selectedAssetId: selectedAsset?.focusId ?? '' });
    }, [selectedAsset, setParams]);

    useEffect(() => {
        if (assets.length > 1) {
            setTimeout(() => {
                leaveNewAsset();
            }, 600);
        }
    }, [assets]);

    return {
        blur,
        isPlaying,
        assets,
        title,
        data,
    };
};
