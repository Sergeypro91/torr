import React, { memo, useEffect } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import {
    AsideBody,
    AsideContainer,
    AsideFooter,
    AsideHeader,
    AsideWrapper,
} from './styled';
import { useAppStore } from '@/store';
import { ConstantNav } from '@/components/Aside/ConstantNav';
import { VariableNav } from '@/components/Aside/VariableNav';

export const Aside = memo(() => {
    const isBackPress = useAppStore((state) => state.isBackPress);
    const toggleExit = useAppStore((state) => state.toggleExit);
    const toggleBackPress = useAppStore((state) => state.toggleBackPress);
    const toggleNavActive = useAppStore((state) => state.toggleNavActive);
    const { ref, focusKey, hasFocusedChild } = useFocusable({
        focusKey: 'NAV',
        trackChildren: true,
    });

    useEffect(() => {
        toggleNavActive(hasFocusedChild);
    }, [hasFocusedChild, toggleNavActive]);

    useEffect(() => {
        if (hasFocusedChild && isBackPress) {
            toggleExit(true);
            toggleBackPress(false);
        }
    }, [isBackPress, toggleBackPress, hasFocusedChild, toggleExit]);

    return (
        <FocusContext.Provider value={focusKey}>
            <AsideWrapper ref={ref} focused={hasFocusedChild}>
                <AsideContainer>
                    <AsideHeader>
                        <h1>Torr</h1>
                    </AsideHeader>

                    <AsideBody>
                        <ConstantNav />

                        <VariableNav />
                    </AsideBody>

                    <AsideFooter>{`© SSHUA ${new Date().getFullYear()}`}</AsideFooter>
                </AsideContainer>
            </AsideWrapper>
        </FocusContext.Provider>
    );
});

Aside.displayName = 'Aside';
