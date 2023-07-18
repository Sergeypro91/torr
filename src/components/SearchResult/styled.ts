import styled from 'styled-components';

export const ItemContainer = styled.div`
    margin: 0 40px 40px 0;
    display: flex;
    flex: none;
    align-content: stretch;
    box-sizing: border-box;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > *:nth-child(5n) {
        margin-right: 0;
    }
`;

export const SearchResultContainer = styled.div<{
    width?: number;
    height?: number;
}>`
    grid-area: result;
    padding: ${({ theme }) => theme.spacing(10, 10, 0, 5)};
    overflow: hidden;

    ${ItemContainer} {
        width: ${({ width }) => `${width}px`};
        height: ${({ height }) => `${height}px`};
    }

    & > * {
        ${({ theme }) => theme.hideScrollbar}
    }
`;

export const HeaderContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
