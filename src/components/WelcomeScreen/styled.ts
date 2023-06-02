import styled from 'styled-components';

export const WelcomeScreenContainer = styled.div<{ isStartHide: boolean }>`
    grid-area: aside / aside / content / content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.black};
    transition: ${({ theme }) => theme.transition};
    opacity: ${({ isStartHide }) => (isStartHide ? 0 : 1)};
    z-index: 1;
`;
