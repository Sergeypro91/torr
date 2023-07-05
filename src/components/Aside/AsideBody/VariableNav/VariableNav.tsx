import React, { Fragment, memo, useCallback } from 'react';
import { useRouteStore } from '@/stores';
import { FocusDetails } from '@noriginmedia/norigin-spatial-navigation';
import { NavItem } from '@/components';
import { NavProps } from '@/types';
import { rows } from '@/assets/data';
import { MenuItem } from '@/components/Aside/AsideBody/MenuItem';
import { Devider } from '@/components/Aside/AsideBody/VariableNav/styled';

type VariableNavProps = {
    setFocus: (
        focusKey: string,
        focusDetails?: FocusDetails | undefined,
    ) => void;
};

export const VariableNav = memo(({ setFocus }: VariableNavProps) => {
    const route = useRouteStore((state) => state.route);

    const navigateTo = useCallback(
        (props: NavProps) => {
            setFocus(props.pathName);
        },
        [setFocus],
    );

    const mainNavRender = useCallback(() => {
        return rows.map(({ title }, id) => {
            return (
                <Fragment key={title}>
                    {!id ? <Devider key="devider" /> : null}

                    <NavItem
                        route={{ pathName: title }}
                        navigateTo={navigateTo}
                        render={(props) => (
                            <MenuItem {...props}>{title}</MenuItem>
                        )}
                    />
                </Fragment>
            );
        });
    }, [navigateTo]);

    return <>{!route.pathName ? mainNavRender() : null}</>;
});

VariableNav.displayName = 'VariableNav';
