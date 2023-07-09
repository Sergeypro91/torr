import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: ${({ theme }) => theme.transition};
`;
