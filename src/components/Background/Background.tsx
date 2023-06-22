import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppStore, useRouteStore } from '@/stores';
import { BackgroundContent, BackgroundItem, Poster } from '@/components';
import { getImageTitle } from '@/utils';
import { SelectElement } from '@/types';
import { BackgroundContainer, BackgroundBackground } from './styled';

export const Background = () => {
    const [blur, setBlur] = useState(false);
    const [assets, setAssets] = useState<SelectElement[]>([]);
    const setParams = useRouteStore((state) => state.setParams);
    const { pathName } = useRouteStore((state) => state.route);
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const data = useAppStore((state) => state.data);

    const title = useMemo(() => {
        return selectedAsset ? getImageTitle(selectedAsset) : '';
    }, [selectedAsset]);

    const addNewAsset = useCallback((assetData: SelectElement) => {
        setAssets((prevState) => {
            const assetIds = prevState.map(
                (asset) => `${asset.tmdbId}${asset.mediaType}`,
            );
            const isNewAssetExist = assetIds.includes(
                `${assetData.tmdbId}${assetData.mediaType}`,
            );

            return isNewAssetExist ? prevState : [assetData, ...prevState];
        });
    }, []);

    const leaveNewAsset = () => {
        setTimeout(() => {
            setAssets((prevState) => [prevState[0]]);
        }, 300);
    };

    useEffect(() => {
        setTimeout(() => {
            setBlur(Boolean(pathName));
        }, 300);
    }, [pathName]);

    useEffect(() => {
        if (selectedAsset) {
            addNewAsset(selectedAsset);
        }
    }, [selectedAsset, addNewAsset]);

    useEffect(() => {
        setParams({ selectedAssetId: selectedAsset?.focusId || '' });
    }, [selectedAsset, setParams]);

    useEffect(() => {
        if (assets.length > 1) {
            leaveNewAsset();
        }
    }, [assets]);

    return (
        <BackgroundContainer blur={blur}>
            <BackgroundBackground>
                {[...assets].reverse().map((asset) => (
                    <BackgroundItem key={asset.tmdbId}>
                        <Poster data={asset} type="backdropPath" />
                    </BackgroundItem>
                ))}
            </BackgroundBackground>

            <BackgroundContent>
                <h3>{title}</h3>
                <p>{data}</p>
            </BackgroundContent>
        </BackgroundContainer>
    );
};
