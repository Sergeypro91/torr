import styled from 'styled-components';

export const PictureContainer = styled.div`
    flex: 1 100%;
    display: grid;
    grid: 140px auto / repeat(3, 1fr);
    grid-template-areas:
        'info header header'
        'info content content';
    overflow: hidden;
`;

export const PictureHeader = styled.div`
    height: 140px;
    grid-area: header;
    display: flex;
    padding: ${({ theme }) => theme.spacing(10, 10, 10, 10)};
`;
