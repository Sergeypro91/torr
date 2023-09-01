import React, { memo, useEffect } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useAppStore } from '@/stores';
import { AsideHeader } from './AsideHeader';
import { AsideBody } from './AsideBody';
import { AsideFooter } from './AsideFooter';
import { AsideContainer, AsideWrapper } from './styled';

export const Aside = memo(() => {
    const toggleNavActive = useAppStore((state) => state.toggleNavActive);
    const asideNavWidth = useAppStore((state) => state.asideNavWidth);
    const { ref, focusKey, hasFocusedChild } = useFocusable({
        focusKey: 'NAV',
        trackChildren: true,
        saveLastFocusedChild: false,
    });

    useEffect(() => {
        toggleNavActive(hasFocusedChild);
    }, [hasFocusedChild, toggleNavActive]);

    return (
        <FocusContext.Provider value={focusKey}>
            <AsideContainer ref={ref} asideNavWidth={asideNavWidth}>
                <AsideWrapper>
                    <AsideHeader />
                    <AsideBody />
                    <AsideFooter />
                </AsideWrapper>
            </AsideContainer>
        </FocusContext.Provider>
    );
});

Aside.displayName = 'Aside';
