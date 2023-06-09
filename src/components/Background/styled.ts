import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    grid-area: aside / aside / content / content;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.transition};
`;
