import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const ContentRowContainer = styled.div<FocusedItem>`
    display: flex;
    flex-direction: column;
    padding-left: ${({ theme }) => theme.spacing(10)};
    opacity: ${({ focused }) => (focused ? 1 : 0.5)};
    transition: ${({ theme }) => theme.transition};

    & > *:not(:first-child):not(:only-child) {
        margin-top: ${({ theme }) => theme.spacing(5)};
    }
`;

export const ContentRowTitle = styled.h3`
    font-weight: 600;
    color: ${({ theme }) => theme.palette.white};
`;

export const ContentRowAssets = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;

    & > *:not(:first-child):not(:only-child) {
        margin-left: ${({ theme }) => theme.spacing(10)};
    }

    & > *:last-child {
        padding-right: ${({ theme }) => theme.spacing(10)};
    }
`;
