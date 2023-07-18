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
    const { data, style, vertical } = props;
    const { ref, focused, handleAssetClick, handleAssetDoubleClick } = useAsset(
        { ...props },
    );

    if (!data) {
        return <AssetSkeleton style={style} />;
    }

    return (
        <AssetWrapper
            ref={ref}
            id={data.tmdbId}
            onClick={handleAssetClick}
            onDoubleClick={handleAssetDoubleClick}
            style={style}
        >
            <AssetContainer focused={focused}>
                <AssetBackground>
                    <Poster
                        size="w500"
                        type={vertical ? 'posterPath' : 'hPosterPath'}
                        data={data}
                    />
                </AssetBackground>
                <AssetInner>{}</AssetInner>
            </AssetContainer>
        </AssetWrapper>
    );
});

Asset.displayName = 'Asset';
