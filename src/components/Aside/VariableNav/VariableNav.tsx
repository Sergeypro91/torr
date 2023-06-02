import React, { memo, useCallback } from 'react';
import { rows } from '@/assets/data';
import { NavProps } from '@/components/types';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useRouteStore } from '@/store';
import { NavItem } from '../NavItem';

export const VariableNav = memo(() => {
    const route = useRouteStore((state) => state.route);
    const { ref, focusKey, setFocus } = useFocusable({
        trackChildren: true,
        saveLastFocusedChild: false,
    });

    const navigateTo = useCallback(
        (props: NavProps) => {
            setFocus(props.pathName);
        },
        [setFocus],
    );

    const mainNavRender = useCallback(() => {
        return rows.map(({ title }) => {
            return (
                <NavItem
                    key={title}
                    route={{ pathName: title }}
                    navigateTo={navigateTo}
                >
                    <h2>{title}</h2>
                </NavItem>
            );
        });
    }, [navigateTo]);

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref}>{!route.pathName ? mainNavRender() : null}</div>
        </FocusContext.Provider>
    );
});

VariableNav.displayName = 'VariableNav';
