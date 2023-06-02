'use client';

import React, { PropsWithChildren } from 'react';
import { defaultTheme, GlobalStyle } from '@/styles';
import { ThemeProvider } from 'styled-components';
import { ExitPopup, KeydownListener, WelcomeScreen } from '@/components';
import { useTizenListener } from '@/hooks';
import {
    init,
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { AppContainer } from './styled';

init({
    debug: false,
    visualDebug: false,
});

export const App = ({ children }: PropsWithChildren) => {
    const { ref, focusKey } = useFocusable({
        trackChildren: true,
        isFocusBoundary: true,
    });

    useTizenListener();

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <FocusContext.Provider value={focusKey}>
                <AppContainer ref={ref}>
                    {children}
                    <WelcomeScreen />
                    <ExitPopup />
                </AppContainer>
            </FocusContext.Provider>
            <KeydownListener />
        </ThemeProvider>
    );
};
