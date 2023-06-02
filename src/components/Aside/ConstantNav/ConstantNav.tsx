import React, { memo, useEffect } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { routes, useAppStore } from '@/store';
import { NavItem } from '../NavItem';

export const ConstantNav = memo(() => {
    const isNavActive = useAppStore((state) => state.isNavActive);
    const { ref, focusKey, focusSelf } = useFocusable({
        trackChildren: true,
        saveLastFocusedChild: false,
    });

    useEffect(() => {
        if (isNavActive) {
            focusSelf();
        }
    }, [focusSelf, isNavActive]);

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref}>
                <NavItem route={{ pathName: routes.search }}>
                    <h2>Search</h2>
                </NavItem>
                <NavItem route={{ pathName: routes.downloads }}>
                    <h2>Downloads</h2>
                </NavItem>
            </div>
        </FocusContext.Provider>
    );
});

ConstantNav.displayName = 'ConstantNav';
