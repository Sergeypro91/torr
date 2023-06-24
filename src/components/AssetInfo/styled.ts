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

export const AssetInfoTitle = styled.div`
    flex: 1 100%;
    display: flex;
    color: ${({ theme }) => theme.palette.white};
    font-weight: 600;
    overflow: scroll;

    * {
        font-weight: ${({ theme }) => theme.typography.h1['font-weight']};
    }
`;

export const AssetInfoDetail = styled.div`
    flex: 1 100%;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.palette.gray['20']};

    & > *:not(:only-child):not(:first-child) {
        margin-top: ${({ theme }) => theme.spacing(5)};
    }
`;

export const AssetInfoDescription = styled.h3`
    font-weight: 300;
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 5;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-shadow: ${({ theme }) => `0 0 0 ${theme.palette.gray['20']}`};
`;
