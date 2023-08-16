import styled from 'styled-components';

export const SearchContainer = styled.div`
    flex: 1 100%;
    display: grid;
    grid: auto 1fr / 1fr 2fr;
    grid-template-areas:
        'input input'
        'info result';
    overflow: hidden;
`;
