import styled from 'styled-components';

export const InputContainer = styled.div<{
    focused: boolean;
    focusKey?: string;
}>`
    border: ${({ focused }) => (focused ? '4px solid white' : 'none')};
    transition: ${({ theme }) => theme.transition};
`;
