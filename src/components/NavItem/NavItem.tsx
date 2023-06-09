import React, { JSX, useCallback, useMemo } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { Route, useRouteStore } from '@/stores';
import { NavItemContainer } from './styled';

export type NavItemProps = {
    children: JSX.Element;
    route: Route;
    navigateTo?: (route: Route) => void;
};

export const NavItem = ({ children, route, navigateTo }: NavItemProps) => {
    const { pathName } = useRouteStore((state) => state.route);
    const navigate = useRouteStore((state) => state.navigate);

    const isNavActive = useMemo(
        () => route.pathName === pathName,
        [route, pathName],
    );

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
                    active: isNavActive ? '1' : undefined,
                    focused: focused ? '1' : undefined,
                });
            })}
        </NavItemContainer>
    );
};
