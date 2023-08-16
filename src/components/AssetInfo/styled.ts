import styled from 'styled-components';

export const AssetInfoContainer = styled.div`
    flex: 1 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    & > *:not(:only-child):not(:first-child) {
        margin-top: ${({ theme }) => theme.spacing(10)};
    }
`;

export const AssetInfoTitle = styled.div<{ overview: boolean }>`
    height: auto;
    max-height: 250px;
    flex: ${({ overview }) => (!overview ? '1 100%' : 'auto')};
    display: flex;
    color: ${({ theme }) => theme.palette.gray['20']};
    font-weight: 600;
    overflow: ${({ overview }) => (!overview ? 'scroll' : 'unset')};

    * {
        font-size: 76px;
        font-weight: ${({ theme }) => theme.typography.h1['font-weight']};
    }
`;

export const AssetInfoDetail = styled.div`
    flex: 1 100%;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.palette.gray['20']};
    overflow: scroll;

    & > *:not(:only-child):not(:first-child) {
        margin-top: ${({ theme }) => theme.spacing(5)};
    }
`;

export const AssetInfoTagline = styled.h3<{ isShown: boolean }>`
    font-weight: 600;
    text-transform: uppercase;
    display: ${({ isShown }) => (isShown ? '-webkit-box' : 'none')};
`;

export const AssetInfoDescription = styled.h3<{ isShown: boolean }>`
    font-weight: 300;
    overflow: hidden;
    display: ${({ isShown }) => (isShown ? '-webkit-box' : 'none')};
    text-shadow: ${({ theme }) => `0 0 0 ${theme.palette.gray['20']}`};
`;

export const AssetInfoProduction = styled.h3<{ isShown: boolean }>`
    display: ${({ isShown }) => (isShown ? 'grid' : 'none')};
    background: ${({ theme }) => theme.palette.gray['20']};
    padding: ${({ theme }) => theme.spacing(5)};
    border-radius: ${({ theme }) => theme.spacing(2)};
    grid: auto / repeat(4, 1fr);
    align-items: center;

    &:empty {
        display: none;
    }

    & > *:nth-child(n + 5) {
        margin-top: ${({ theme }) => theme.spacing(5)};
    }

    & img {
        width: 100%;
        max-width: 120px;
        max-height: 60px;
        object-fit: contain;
    }
`;
