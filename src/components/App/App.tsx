'use client';

import React, { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { useAppStore } from '@/stores';
import { defaultTheme, GlobalStyle } from '@/styles';
import {
    AppWrapper,
    Background,
    ExitPopup,
    KeydownListener,
} from '@/components';
import { useReactQuery, useTizenListener } from '@/hooks';
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
    const isNavActive = useAppStore((state) => state.isNavActive);
    const { ref, focusKey } = useFocusable({
        trackChildren: true,
        isFocusBoundary: true,
    });

    useTizenListener();

    const { queryClient } = useReactQuery();

    return (
        <ThemeProvider theme={defaultTheme}>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <FocusContext.Provider value={focusKey}>
                    <AppContainer ref={ref}>
                        <Background id="backgroun" />
                        <AppWrapper id="app" focused={isNavActive}>
                            {children}
                        </AppWrapper>
                        {/*<WelcomeScreen />*/}
                        <ExitPopup />
                    </AppContainer>
                </FocusContext.Provider>
                <KeydownListener />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    );
};
