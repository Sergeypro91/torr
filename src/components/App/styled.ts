import styled from 'styled-components';

export const AppWrapper = styled.div`
    height: 100%;
    display: flex;
    position: fixed;
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
`;

export const AppContainer = styled.div<{
    isNavActive?: boolean;
    asideNavWidth?: number;
}>`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    ${AppWrapper} {
        width: ${({ asideNavWidth }) => `calc(100vw + ${asideNavWidth}px)`};
        transform: ${({ isNavActive, asideNavWidth }) =>
            isNavActive
                ? `translate3d(0, 0, 0)`
                : `translate3d(-${asideNavWidth}px, 0, 0)`};
    }
`;
