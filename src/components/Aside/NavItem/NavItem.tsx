import React, { PropsWithChildren, useCallback } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { Route, useRouteStore } from '@/store';
import { NavItemContainer } from './styled';

export type NavItemProps = PropsWithChildren & {
    route: Route;
    focusKey?: string;
    navigateTo?: (route: Route) => void;
};

export const NavItem = ({
    children,
    route,
    focusKey,
    navigateTo,
}: NavItemProps) => {
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
        <NavItemContainer
            ref={ref}
            focused={focused}
            focusKey={focusKey}
            onClick={handleClick}
        >
            {children}
        </NavItemContainer>
    );
};
