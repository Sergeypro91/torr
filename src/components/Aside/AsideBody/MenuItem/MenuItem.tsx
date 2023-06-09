import React, { ReactNode } from 'react';
import { MenuItemContainer } from './styled';

export type MenuItemProps = {
    children: ReactNode;
    active?: string;
    focused?: string;
};

export const MenuItem = ({ children, active, focused }: MenuItemProps) => {
    return (
        <MenuItemContainer active={active} focused={focused}>
            <h3>{children}</h3>
        </MenuItemContainer>
    );
};
