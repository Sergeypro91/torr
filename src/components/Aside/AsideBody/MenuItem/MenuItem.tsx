import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { isOverflown, calculateTickerTime } from '@/utils';
import { MenuItemContainer } from './styled';

export type MenuItemProps = {
    children: ReactNode;
    focused?: string;
};

export const MenuItem = ({ children, focused }: MenuItemProps) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const [isItemOverflown, setIsItemOverflown] = useState(false);
    const [tickerTime, setTickerTime] = useState(0);

    useEffect(() => {
        if (itemRef.current) {
            setTickerTime(calculateTickerTime(itemRef.current));
            setIsItemOverflown(isOverflown(itemRef.current));
        }
    }, []);

    return (
        <MenuItemContainer
            ref={itemRef}
            focused={focused}
            tickerTime={tickerTime}
            isItemOverflown={isItemOverflown}
        >
            <h3>{children}</h3>
        </MenuItemContainer>
    );
};
