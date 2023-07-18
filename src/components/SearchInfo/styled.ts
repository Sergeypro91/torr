import styled from 'styled-components';

export const SearchInfoContainer = styled.div`
    grid-area: info;
    display: flex;
    padding: ${({ theme }) => theme.spacing(10, 5, 10, 10)};
    overflow: hidden;
`;
