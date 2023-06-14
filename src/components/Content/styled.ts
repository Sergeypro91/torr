import styled from 'styled-components';

export const ContentWrapper = styled.div<{ focusKey?: string }>`
    display: flex;
    flex-direction: column;
    transition: all 300ms ease-out;
    overflow: hidden;

    & > *:not(:first-child):not(:only-child) {
        margin-top: ${({ theme }) => theme.spacing(10)};
    }
    &:after {
        content: '';
        padding-top: calc(100vh / 3);
    }
`;
