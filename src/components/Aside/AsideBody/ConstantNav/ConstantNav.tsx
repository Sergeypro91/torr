import React, { memo, useMemo } from 'react';
import { routes, useRouteStore } from '@/stores';
import { NavItem } from '@/components';
import { MenuItem } from '@/components/Aside/AsideBody/MenuItem';

const constantRoutes = [routes.home, routes.search, routes.downloads];

export const ConstantNav = memo(() => {
    const { pathName } = useRouteStore((state) => state.route);

    const filteredConstantRoutes = useMemo(() => {
        return constantRoutes.filter((route) => route !== pathName);
    }, [pathName]);

    return (
        <>
            {filteredConstantRoutes.map((route) => (
                <NavItem
                    key={route || 'home'}
                    route={{ pathName: route }}
                    render={(props) => {
                        return (
                            <MenuItem {...props}>{route || 'home'}</MenuItem>
                        );
                    }}
                />
            ))}
        </>
    );
});

ConstantNav.displayName = 'ConstantNav';
