import React, { memo } from 'react';
import { routes } from '@/stores';
import { NavItem } from '@/components';
import { MenuItem } from '@/components/Aside/AsideBody/MenuItem';

export const ConstantNav = memo(() => {
    return (
        <>
            <NavItem route={{ pathName: routes.search }}>
                <MenuItem>Search</MenuItem>
            </NavItem>
            <NavItem route={{ pathName: routes.downloads }}>
                <MenuItem>Downloads</MenuItem>
            </NavItem>
        </>
    );
});

ConstantNav.displayName = 'ConstantNav';
