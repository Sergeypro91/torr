import React, { useCallback, useEffect, memo } from 'react';
import { ContentContainer, ContentWrapper } from './styled';
import { rows } from '@/assets/data';
import { ContentRow } from './ContentRow';
import {
    FocusableComponentLayout,
    FocusContext,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { FocusableElement } from '../types';
import { useAppStore } from '@/store';

export const Content = memo(() => {
    const selectAsset = useAppStore((state) => state.selectAsset);
    const { ref, focusSelf, focusKey } = useFocusable({
        focusable: true,
        trackChildren: true,
    });

    useEffect(() => {
        focusSelf();
    }, [focusSelf]);

    const onFocus = useCallback(
        (
            layout: FocusableComponentLayout,
            props: FocusableElement,
            event: FocusDetails,
        ) => {
            ref.current.scrollTo({
                top: layout.y,
                behavior: 'smooth',
            });
        },
        [ref],
    );

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentWrapper>
                <ContentContainer ref={ref}>
                    {rows.map(({ title }, id) => (
                        <ContentRow
                            key={`content-${title}-${id}`}
                            section={title}
                            onFocus={onFocus}
                            setSelectedAsset={selectAsset}
                        />
                    ))}
                </ContentContainer>
            </ContentWrapper>
        </FocusContext.Provider>
    );
});

Content.displayName = 'Content';
