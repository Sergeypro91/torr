import React, { memo } from 'react';
import { Poster } from '@/components';
import { useAsset } from './useAsset';
import { AssetProps } from './types';
import {
    AssetInner,
    AssetWrapper,
    AssetContainer,
    AssetBackground,
    AssetSkeleton,
} from './styled';

export const Asset = memo((props: AssetProps) => {
    const { itemData, rowItemId, itemStyle, vertical = false } = props;
    const { ref, focused, handleAssetClick, handleAssetDoubleClick } =
        useAsset(props);

    if (!itemData) {
        return <AssetSkeleton style={itemStyle} />;
    }

    return (
        <AssetWrapper
            ref={ref}
            id={rowItemId}
            onClick={handleAssetClick}
            onDoubleClick={handleAssetDoubleClick}
            style={itemStyle}
        >
            <AssetContainer focused={focused}>
                <AssetBackground>
                    <Poster
                        size="w500"
                        type={vertical ? 'posterPath' : 'hPosterPath'}
                        data={itemData}
                    />
                </AssetBackground>
                <AssetInner>{}</AssetInner>
            </AssetContainer>
        </AssetWrapper>
    );
});

Asset.displayName = 'Asset';
