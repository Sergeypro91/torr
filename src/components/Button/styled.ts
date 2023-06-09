import styled, { DefaultTheme } from 'styled-components';
import { ButtonSize } from '@/components';
import { FocusedItem } from '@/components/types';

const defineSize = ({
    theme,
    size,
}: ButtonContainerProps & {
    theme: DefaultTheme;
}) => {
    if (size === 'small') {
        return `${theme.spacing(6)}px`;
    }

    if (size === 'medium') {
        return `${theme.spacing(8)}px`;
    }

    if (size === 'normal') {
        return `${theme.spacing(10)}px`;
    }

    if (size === 'big') {
        return '60px';
    }
};

type ButtonContainerProps = FocusedItem & {
    size: ButtonSize;
    isIconButton: boolean;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    ${({ theme }) => theme.typography.h4}
    width: ${(props) => (props.isIconButton ? defineSize(props) : 'auto')};
    height: ${defineSize};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme, isIconButton }) =>
        isIconButton ? '0' : theme.spacing(0, 4)};
    border: 0;
    background-color: ${({ theme, focused }) =>
        focused ? theme.palette.white : 'inherit'};
    mix-blend-mode: ${({ focused }) => (focused ? 'lighten' : 'none')};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};

    & > *:not(:empty):not(:first-child) {
        margin-left: ${({ theme }) => theme.spacing(4)};
    }

    & > * {
        filter: ${({ focused }) => (focused ? 'invert(1)' : 'none')};
    }

    & > * {
        fill: ${({ theme }) => theme.palette.gray['40']};
        color: ${({ theme }) => theme.palette.gray['40']};
    }

    &:focus-visible {
        outline: none;
    }
`;
