'use client';

import React, { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '@/styles';
import { Background, ExitPopup, KeydownListener } from '@/components';
import { useAppStore } from '@/stores';
import { useReactQuery } from '@/hooks';
import {
    init,
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { AppContainer, AppWrapper } from './styled';

init({
    debug: false,
    visualDebug: false,
});

export const App = ({ children }: PropsWithChildren) => {
    const asideNavWidth = useAppStore((state) => state.asideNavWidth);
    const isNavActive = useAppStore((state) => state.isNavActive);
    const { ref, focusKey } = useFocusable({
        trackChildren: true,
        isFocusBoundary: true,
    });

    const { queryClient } = useReactQuery();

    return (
        <ThemeProvider theme={defaultTheme}>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <FocusContext.Provider value={focusKey}>
                    <Background id="backgroun" />
                    <AppContainer
                        id="app"
                        ref={ref}
                        isNavActive={isNavActive}
                        asideNavWidth={asideNavWidth}
                    >
                        <AppWrapper>{children}</AppWrapper>
                    </AppContainer>
                    {/*<WelcomeScreen />*/}
                    <ExitPopup />
                </FocusContext.Provider>
                <KeydownListener />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    );
};
