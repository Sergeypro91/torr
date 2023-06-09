import styled, { DefaultTheme } from 'styled-components';
import { FocusedItem } from '@/components/types';

const defineColor = ({
    theme,
    active,
    focused,
}: FocusedItem & {
    theme: DefaultTheme;
}) => {
    if (focused) {
        return theme.palette.black;
    }

    if (active) {
        return theme.palette.white;
    }

    return theme.palette.gray['60'];
};

export const MenuItemContainer = styled.div<FocusedItem>`
    height: ${({ theme }) => theme.spacing(12)};
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 3)};
    background-color: ${({ theme, focused }) =>
        focused ? theme.palette.white : 'none'};
    border-radius: ${({ theme }) => theme.spacing(2)};
    color: ${defineColor};
    mix-blend-mode: ${({ focused }) => (focused ? 'lighten' : 'none')};
    text-transform: uppercase;
    transition: ${({ theme }) => theme.transition};

    &:hover {
        cursor: pointer;
        box-shadow: ${({ theme, focused }) =>
            !focused ? theme.boxShadow.targetBorder : 'none'};
    }
`;
