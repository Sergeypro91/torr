import styled from 'styled-components';

export const MainContainer = styled.main`
    grid-area: main / main / content / content;
    display: flex;
    flex-direction: column;
    transition: ${({ theme }) => theme.transition};
`;
