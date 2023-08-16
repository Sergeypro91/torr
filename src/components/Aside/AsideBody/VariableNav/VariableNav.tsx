import React, { Fragment, memo } from 'react';
import { NavItem } from '@/components';
import { splitLinkString } from '@/utils/splitLinkString';
import { VariableNavProps } from './types';
import { Devider } from './styled';
import { useVariableNav } from './useVariableNav';
import { MenuItem } from '../MenuItem';

export const VariableNav = memo((props: VariableNavProps) => {
    const { variableNav, navigateTo } = useVariableNav(props);

    return (
        <>
            {variableNav.map(({ title, link }, id) => {
                const { pathName, params, anchor } = splitLinkString(link);

                return (
                    <Fragment key={link}>
                        {!id ? <Devider key="devider" /> : null}

                        <NavItem
                            route={{
                                pathName: pathName.replace(/\s/g, ''),
                                params: new URLSearchParams(params),
                            }}
                            navigateTo={anchor ? navigateTo : undefined}
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
