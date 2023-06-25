import styled from 'styled-components';

export const AssetInfoGeneralContainer = styled.div`
    display: flex;
    align-items: center;

    & > *:not(:only-child):not(:first-child) {
        margin-left: ${({ theme }) => theme.spacing(5)};
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    & > *:not(:only-child):not(:first-child) {
        margin-top: ${({ theme }) => theme.spacing(2)};
    }
`;

export const Genre = styled.div<{
    isOverflown?: boolean;
    isEmpty?: boolean;
}>`
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    position: relative;

    & > * {
        font-family: ${({ theme, isEmpty }) =>
            isEmpty ? `${theme.typography.flowCircular}` : 'inherit'};
        display: inline-block;
        position: relative;
        animation: ${({ isOverflown }) =>
            isOverflown
                ? 'backAndForth 3s infinite alternate ease-in-out;'
                : ''};
    }
    @keyframes backAndForth {
        0%,
        20% {
            transform: translateX(0%);
            left: 0;
        }
        80%,
        100% {
            transform: translateX(-100%);
            left: 100%;
        }
    }
`;

export const TypeAndDate = styled.h2<{
    isEmpty?: boolean;
}>`
    font-family: ${({ theme, isEmpty }) =>
        isEmpty ? `${theme.typography.flowCircular}` : 'inherit'};

    ${({ theme }) => theme.typography.ellipsis}

    &:first-letter {
        text-transform: uppercase;
    }
`;
