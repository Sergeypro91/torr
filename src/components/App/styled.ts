import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
        'aside main main'
        'aside main main'
        'aside content content';
    z-index: 0;
`;
