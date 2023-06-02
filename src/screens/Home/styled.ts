import styled from 'styled-components';

export const HomeContainer = styled.div`
    flex: 1 100%;
    display: grid;
    grid: repeat(2, minmax(66%, 2fr)) / repeat(3, 1fr);
    grid-template-areas:
        'left center right'
        'bottom bottom bottom';
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    grid-area: left;
    display: flex;
    flex-direction: column;
`;

export const HomeCenter = styled.div`
    grid-area: center;
    display: flex;
    flex-direction: column;
`;

export const HomeRight = styled.div`
    grid-area: right;
    display: flex;
    flex-direction: column;
`;

export const HomeBottom = styled.div`
    //grid-column: 1 / 4;
    //grid-row: 3 / 4;
    grid-area: bottom;
    display: flex;
    flex-direction: column;
`;