import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const MenuItemContainer = styled.div<FocusedItem>`
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
    overflow: hidden;

    &:hover {
        cursor: pointer;
        box-shadow: ${({ theme, focused }) =>
            !focused ? theme.boxShadow.targetBorder : 'none'};
    }

    & > * {
        ${({ theme }) => theme.typography.ellipsis}
    }
`;
