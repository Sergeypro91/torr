import React, { Fragment, memo } from 'react';
import { NavItem } from '@/components';
import { MenuItem } from '../MenuItem';
import { VariableNavProps } from './types';
import { Devider } from './styled';
import { useVariableNav } from './useVariableNav';

export const VariableNav = memo((props: VariableNavProps) => {
    const { variableNav, navigateTo } = useVariableNav(props);

    return (
        <>
            {variableNav.map(({ title, link }, id) => {
                return (
                    <Fragment key={link}>
                        {!id ? <Devider key="devider" /> : null}

                        <NavItem
                            route={{ pathName: link.replace(/\s/g, '') }}
                            navigateTo={navigateTo}
                            render={(props) => (
                                <MenuItem {...props}>{title}</MenuItem>
                            )}
                        />
                    </Fragment>
                );
            })}
        </>
    );
});

VariableNav.displayName = 'VariableNav';
