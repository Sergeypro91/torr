import React, { useCallback, useRef } from 'react';
import {
    FocusableComponentLayout,
    FocusContext,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { AssetType, SelectElement } from '@/types';
import {
    ContentRowAssets,
    ContentRowContainer,
    ContentRowTitle,
} from './styled';
import { Asset } from './Asset';

type ContentRowProps = {
    sectionId: string;
    sectionName: string;
    trends: AssetType[];
    onFocus: (
        layout: FocusableComponentLayout,
        props: SelectElement,
        event: FocusDetails,
    ) => void;
    onSelect: (asset: SelectElement) => void;
};

export const ContentRow = ({
    sectionId,
    sectionName,
    trends,
    onFocus,
    onSelect,
}: ContentRowProps) => {
    const { ref, focusKey, hasFocusedChild } = useFocusable({
        onFocus,
        focusKey: sectionId,
        trackChildren: true,
    });

    const scrollingRef = useRef<null | HTMLDivElement>(null);

    const onAssetFocus = useCallback(
        (
            layout: FocusableComponentLayout,
            props: SelectElement,
            event: FocusDetails,
        ) => {
            if (scrollingRef.current) {
                scrollingRef.current.scrollTo({
                    left: layout.x,
                    behavior: 'smooth',
                });
            }

            onSelect(props);
        },
        [onSelect],
    );

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentRowContainer ref={ref} focused={hasFocusedChild}>
                <ContentRowTitle>{sectionName}</ContentRowTitle>

                <ContentRowAssets ref={scrollingRef}>
                    {trends.map((props) => (
                        <Asset
                            key={`${sectionId}${props.tmdbId}`}
                            focusId={`${sectionId}${props.tmdbId}`}
                            onFocus={onAssetFocus}
                            {...props}
                        />
                    ))}
                </ContentRowAssets>
            </ContentRowContainer>
        </FocusContext.Provider>
    );
};

ContentRow.displayName = 'ContentRow';
