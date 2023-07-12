import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const MenuItemContainer = styled.div<
    FocusedItem & { tickerTime?: number; isItemOverflown?: boolean }
>`
    height: ${({ theme }) => theme.spacing(12)};
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 3)};
    background-color: ${({ theme, focused }) =>
        focused ? theme.palette.white : 'none'};
    border-radius: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme, focused }) =>
        focused ? theme.palette.black : theme.palette.gray['20']};
    mix-blend-mode: ${({ focused }) => (focused ? 'lighten' : 'none')};
    text-transform: uppercase;
    transition: ${({ theme }) => theme.transition};
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        box-shadow: ${({ theme, focused }) =>
            !focused ? theme.boxShadow.targetBorder : 'none'};

        & > * {
            animation: ${({ isItemOverflown, tickerTime }) =>
                isItemOverflown
                    ? `backAndForth ${tickerTime}ms infinite alternate ease-in-out;`
                    : ''};
        }
    }

    & > * {
        display: inline-block;
        position: relative;
        animation: ${({ focused, isItemOverflown, tickerTime }) =>
            focused && isItemOverflown
                ? `backAndForth ${tickerTime}ms infinite alternate ease-in-out;`
                : ''};
    }
    ${({ theme }) => theme.animations.backAndForth}
`;
