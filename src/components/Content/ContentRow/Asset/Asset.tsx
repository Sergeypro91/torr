import React, { memo } from 'react';
import { Poster } from '@/components';
import { useAsset } from './useAsset';
import { AssetProps } from './types';
import {
    AssetInner,
    AssetWrapper,
    AssetContainer,
    AssetBackground,
} from './styled';

export const Asset = memo((props: AssetProps) => {
    const { ...data } = props;
    const { ref, focused, focusId, handleAssetClick, handleAssetDoubleClick } =
        useAsset({ ...props });

    return (
        <AssetWrapper
            ref={ref}
            id={focusId}
            onClick={handleAssetClick}
            onDoubleClick={handleAssetDoubleClick}
        >
            <AssetContainer focused={focused}>
                <AssetBackground>
                    <Poster size="w500" type="hPosterPath" data={data} />
                </AssetBackground>
                <AssetInner>{}</AssetInner>
            </AssetContainer>
        </AssetWrapper>
    );
});

Asset.displayName = 'Asset';
