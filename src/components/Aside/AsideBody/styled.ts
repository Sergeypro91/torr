import styled from 'styled-components';

export const AsideBodyContainer = styled.nav`
    flex: 1 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > *:not(:first-child):not(:empty) {
        margin-top: ${({ theme }) => theme.spacing(2)};
    }
`;
