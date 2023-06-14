import React, { memo, useCallback, useRef } from 'react';
import {
    ContentRowAssets,
    ContentRowContainer,
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
import { FocusableElement } from '@/types';

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
                <ContentRowContainer ref={ref} focused={hasFocusedChild}>
                    <ContentRowTitle>{section}</ContentRowTitle>

                    <ContentRowAssets ref={scrollingRef}>
                        {assets.map(({ title, color }) => (
                            <Asset
                                key={`${section}${title}`}
                                title={`${section}${title}`}
                                color={color}
                                onFocus={onAssetFocus}
                            />
                        ))}
                    </ContentRowAssets>
                </ContentRowContainer>
            </FocusContext.Provider>
        );
    },
);

ContentRow.displayName = 'ContentRow';
