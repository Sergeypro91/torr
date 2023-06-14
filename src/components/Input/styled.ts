import styled from 'styled-components';

export const InputField = styled.input<{}>`
    ${({ theme }) => theme.typography.h4}
    background-color: #00000000;
    border-color: #00000000;

    &:focus {
        outline: none !important;
        border: none;
    }
`;

export const InputContainer = styled.div<{
    focused: boolean;
    focusKey?: string;
}>`
    height: 100%;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 4)};
    background-color: ${({ theme, focused }) =>
        focused ? theme.palette.white : ''};
    transition: ${({ theme }) => theme.transition};

    & > * {
        color: ${({ theme, focused }) =>
            focused ? theme.palette.black : theme.palette.gray['20']};
    }
`;
