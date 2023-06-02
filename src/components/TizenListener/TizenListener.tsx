'use client';

import React, { useCallback } from 'react';
import { useTizenListener } from '@/hooks';
import { useAppStore, useRouteStore } from '@/store';

const TizenListener = () => {
    const { pathName } = useRouteStore((state) => state.route);
    const goBack = useRouteStore((state) => state.goBack);
    const isNavActive = useAppStore((state) => state.isNavActive);
    const exit = useAppStore((state) => state.exit);
    const toggleNavActive = useAppStore((state) => state.toggleNavActive);
    const toggleExit = useAppStore((state) => state.toggleExit);

    const handleBackPress = useCallback(() => {
        if (exit) {
            toggleExit(false);
        } else if (!isNavActive) {
            toggleNavActive(true);
        } else if (!pathName && !exit) {
            toggleExit(true);
        } else {
            goBack();
        }
    }, [exit, goBack, isNavActive, pathName, toggleExit, toggleNavActive]);

    useTizenListener({ backPress: handleBackPress });

    return null;
};

export default TizenListener;
