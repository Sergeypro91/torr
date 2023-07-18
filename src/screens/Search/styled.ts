import styled from 'styled-components';
import { transparentize } from 'polished';

export const SearchContainer = styled.div`
    flex: 1 100%;
    display: grid;
    grid: auto 1fr / 1fr 2fr;
    grid-template-areas:
        'input input'
        'info result';
    background: ${({ theme }) => theme.palette.black};
    background: linear-gradient(
        0deg,
        ${({ theme }) => transparentize(1, theme.palette.black)} 0%,
        ${({ theme }) => transparentize(0, theme.palette.black)} 100%
    );
    overflow: hidden;
`;
