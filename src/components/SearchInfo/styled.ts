import styled from 'styled-components';

export const SearchInfoContainer = styled.div`
    grid-area: info;
    display: flex;
    padding: ${({ theme }) => theme.spacing(0, 10, 10, 10)};
    overflow: hidden;
`;
