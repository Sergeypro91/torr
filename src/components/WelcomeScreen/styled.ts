import styled from 'styled-components';

export const WelcomeScreenContainer = styled.div<{ isStartHide: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.black};
    transition: ${({ theme }) => theme.transition};
    opacity: ${({ isStartHide }) => (isStartHide ? 0 : 1)};
    z-index: 1;
`;
