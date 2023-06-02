import styled from 'styled-components';
import { rgba } from 'polished';

export const AsideWrapper = styled.aside<{ focused: boolean }>`
    width: auto;
    max-width: ${({ focused }) => (focused ? '100vw' : '0px')};
    grid-area: aside;
    opacity: ${({ focused }) => (focused ? '1' : '0')};
    transition: ${({ theme }) => theme.transition};
    z-index: 1;
`;

export const AsideContainer = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: calc(100vw / 100);
    white-space: nowrap;
`;

export const AsideHeader = styled.div`
    color: ${() => rgba('white', 0.5)};
`;

export const AsideBody = styled.nav`
    flex: 1 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const AsideFooter = styled.div`
    color: ${() => rgba('white', 0.15)};
`;
