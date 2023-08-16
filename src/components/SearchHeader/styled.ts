import styled from 'styled-components';

export const SearchHeaderContainer = styled.div`
    grid-area: input;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(10)};

    & > *:not(:empty):not(:first-child) {
        margin-left: ${({ theme }) => theme.spacing(10)};
    }
`;

export const PageTitle = styled.h2`
    text-transform: uppercase;
`;
