import styled from 'styled-components';

export const PictureInfoContainer = styled.section`
    grid-area: info;
    display: flex;
    padding: ${({ theme }) => theme.spacing(10)};
    overflow: hidden;
`;
