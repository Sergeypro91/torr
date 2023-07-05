import React, { JSX, useCallback } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { Route, useRouteStore } from '@/stores';
import { NavItemContainer } from './styled';

export type NavItemProps = {
    route: Route;
    navigateTo?: (route: Route) => void;
    render: ({ focused }: { focused?: string }) => JSX.Element;
};

export const NavItem = ({ route, navigateTo, render }: NavItemProps) => {
    const navigate = useRouteStore((state) => state.navigate);

    const handleNavigateTo = useCallback(
        (route: Route) => {
            if (navigateTo) {
                navigateTo(route);
            } else {
                navigate(route);
            }
        },
        [navigate, navigateTo],
    );

    const { ref, focused } = useFocusable({
        trackChildren: true,
        onEnterPress: handleNavigateTo,
        extraProps: route,
    });

    const handleClick = useCallback(() => {
        handleNavigateTo(route);
    }, [handleNavigateTo, route]);

    return (
        <NavItemContainer ref={ref} onClick={handleClick}>
            {render({ focused: focused ? '1' : undefined })}
        </NavItemContainer>
    );
};
