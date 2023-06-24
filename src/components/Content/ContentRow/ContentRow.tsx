import React from 'react';
import { useContentRow } from './useContentRow';
import { ContentRowProps } from './types';
import { Asset, AssetSkeleton } from './Asset';
import {
    ContentRowAssets,
    ContentRowContainer,
    ContentRowTitle,
} from './styled';

export const ContentRow = (props: ContentRowProps) => {
    const { sectionName, trends } = props;
    const {
        FocusContext,
        ref,
        focusKey,
        hasFocusedChild,
        onAssetFocus,
        scrollingRef,
        getFocusId,
    } = useContentRow(props);

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
                    <AssetSkeleton />
                </ContentRowAssets>
            </ContentRowContainer>
        </FocusContext.Provider>
    );
};

ContentRow.displayName = 'ContentRow';
