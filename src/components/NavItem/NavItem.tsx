import React, { JSX, useCallback } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { Route, useRouteStore } from '@/stores';
import { NavItemContainer } from './styled';

export type NavItemProps = {
    children: JSX.Element;
    route: Route;
    navigateTo?: (route: Route) => void;
};

export const NavItem = ({ children, route, navigateTo }: NavItemProps) => {
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
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    focused: focused ? '1' : undefined,
                });
            })}
        </NavItemContainer>
    );
};
