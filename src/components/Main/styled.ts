import styled from 'styled-components';
import { transparentize } from 'polished';

export const MainContainer = styled.main`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    // background: linear-gradient(
    //     90deg,
    //     ${({ theme }) => transparentize(0.4, theme.palette.black)} 0%,
    //     ${({ theme }) => transparentize(1, theme.palette.black)} 33%
    // );
    transition: ${({ theme }) => theme.transition};
`;
