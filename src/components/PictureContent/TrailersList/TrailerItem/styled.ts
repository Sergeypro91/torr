import styled from 'styled-components';

export const TrailerItemContainer = styled.div<{ focused: boolean }>`
    background-color: ${({ focused }) => (focused ? 'red' : 'none')};
`;
