import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const ContentRowContainer = styled.div<FocusedItem>`
    display: flex;
    flex-direction: column;
    opacity: ${({ focused }) => (focused ? 1 : 0.5)};
    transition: ${({ theme }) => theme.transition};

    & > *:not(:first-child):not(:only-child) {
        margin-top: ${({ theme }) => theme.spacing(5)};
    }
`;

export const ContentRowTitle = styled.h3<{ indent?: number }>`
    font-weight: 600;
    color: ${({ theme }) => theme.palette.white};
    padding-left: ${({ indent }) => (indent ? `${indent}px` : 'none')};

    &:first-letter {
        text-transform: capitalize;
    }
`;

export const ContentRowAssets = styled.div`
    overflow: hidden;
    display: flex;
`;
