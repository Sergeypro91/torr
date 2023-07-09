import styled from 'styled-components';

export const ContentWrapper = styled.div<{ focusKey?: string }>`
    display: flex;
    flex-direction: column;
    transition: ${({ theme }) => theme.transition};

    & > *:not(:first-child):not(:only-child) {
        margin-top: ${({ theme }) => theme.spacing(10)};
    }
    &:after {
        content: '';
        padding-top: calc(100vh / 3);
    }
`;
