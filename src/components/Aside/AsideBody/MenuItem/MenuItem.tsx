import React, { ReactNode } from 'react';
import { MenuItemContainer } from './styled';

export type MenuItemProps = {
    children: ReactNode;
    focused?: string;
};

export const MenuItem = ({ children, focused }: MenuItemProps) => {
    return (
        <MenuItemContainer focused={focused}>
            <h3>{children}</h3>
        </MenuItemContainer>
    );
};
