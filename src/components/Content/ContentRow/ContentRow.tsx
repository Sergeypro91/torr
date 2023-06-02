import React, { memo, useCallback, useRef } from 'react';
import {
    ContentRowContainer,
    ContentRowList,
    ContentRowWrapper,
    ContentRowTitle,
} from './styled';
import { assets } from '@/assets/data';
import { Asset } from './Asset';
import {
    FocusableComponentLayout,
    FocusContext,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { FocusableElement } from '@/components/types';

export type ContentRowProps = {
    section: string;
    onFocus: (
        layout: FocusableComponentLayout,
        props: FocusableElement,
        details: FocusDetails,
    ) => void;
    setSelectedAsset: (asset: FocusableElement) => void;
};

export const ContentRow = memo(
    ({ section, onFocus, setSelectedAsset }: ContentRowProps) => {
        const { ref, focusKey, hasFocusedChild } = useFocusable({
            onFocus,
            focusKey: section,
            trackChildren: true,
        });

        const scrollingRef = useRef<null | HTMLDivElement>(null);

        const onAssetFocus = useCallback(
            (
                layout: FocusableComponentLayout,
                props: FocusableElement,
                event: FocusDetails,
            ) => {
                setSelectedAsset(props);
                if (scrollingRef.current) {
                    scrollingRef.current.scrollTo({
                        left: layout.x,
                        behavior: 'smooth',
                    });
                }
            },
            [setSelectedAsset],
        );

        return (
            <FocusContext.Provider value={focusKey}>
                <ContentRowWrapper ref={ref}>
                    <ContentRowTitle focused={hasFocusedChild}>
                        {section}
                    </ContentRowTitle>

                    <ContentRowList ref={scrollingRef}>
                        <ContentRowContainer>
                            {assets.map(({ title, color }) => (
                                <Asset
                                    key={`${section}${title}`}
                                    title={`${section}${title}`}
                                    color={color}
                                    onFocus={onAssetFocus}
                                />
                            ))}
                        </ContentRowContainer>
                    </ContentRowList>
                </ContentRowWrapper>
            </FocusContext.Provider>
        );
    },
);

ContentRow.displayName = 'ContentRow';
