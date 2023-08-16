import styled from 'styled-components';

export const PictureInfoContainer = styled.div`
    grid-area: info;
    display: flex;
    padding: ${({ theme }) => theme.spacing(10)};
    overflow: hidden;
`;
