import React from 'react';
import { SkeletonMultiplayer } from '@/components';
import { useIntersection } from '@/hooks';
import { useContentRow } from './useContentRow';
import { ContentRowProps } from './types';
import { Asset, AssetSkeleton } from './Asset';
import {
    ContentRowAssets,
    ContentRowContainer,
    ContentRowTitle,
} from './styled';

export const ContentRow = (props: ContentRowProps) => {
    const { sectionName, trends, skeletonCount = 5, requestMore } = props;

    const {
        FocusContext,
        ref,
        focusKey,
        hasFocusedChild,
        onAssetFocus,
        scrollingRef,
        getFocusId,
    } = useContentRow(props);

    const { observer } = useIntersection({
        action: requestMore,
    });

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentRowContainer ref={ref} focused={hasFocusedChild}>
                <ContentRowTitle>{sectionName}</ContentRowTitle>

                <ContentRowAssets ref={scrollingRef}>
                    {trends.map((trend) => (
                        <Asset
                            key={getFocusId(trend)}
                            focusId={getFocusId(trend)}
                            onFocus={onAssetFocus}
                            {...trend}
                        />
                    ))}
                    <SkeletonMultiplayer
                        counter={skeletonCount}
                        element={AssetSkeleton}
                        observer={observer}
                    />
                </ContentRowAssets>
            </ContentRowContainer>
        </FocusContext.Provider>
    );
};

ContentRow.displayName = 'ContentRow';
