import styled from 'styled-components';
import { FocusedItem } from '@/components/types';

export const SelectorOptionsWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    ${({ theme }) => theme.hideScrollbar}
`;

export const SelectorOptions = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    scroll-snap-type: y mandatory;
    padding: ${({ theme }) => theme.spacing(6, 0)};

    &:hover {
        & > * {
            opacity: 1;
        }
    }
`;

export const SelectorOption = styled.li<{
    selected?: boolean;
}>`
    ${({ theme }) => theme.typography.h4}
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${({ theme, selected }) =>
        selected ? theme.palette.gray['40'] : theme.palette.gray['70']};
    cursor: pointer;
    opacity: ${({ selected }) => (selected ? '1' : '0')};
    transform: ${({ selected }) => (selected ? 'scale(1)' : 'scale(0.7)')};
    transition: ${({ theme }) => theme.transition};
`;

export const Arrows = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > *:not(:empty):not(:first-child) {
        margin-top: ${({ theme }) => theme.spacing(1)};
    }

    & > svg {
        width: ${({ theme }) => theme.spacing(3)};
        height: auto;
        fill: ${({ theme }) => theme.palette.gray['40']};
    }
`;

export const SelectorContainer = styled.div<FocusedItem>`
    height: 100%;
    display: flex;
    padding: ${({ theme }) => theme.spacing(0, 4)};
    background-color: ${({ theme, focused }) =>
        focused ? theme.palette.white : 'inherit'};
    mix-blend-mode: ${({ focused }) => (focused ? 'lighten' : 'none')};
    transition: ${({ theme }) => theme.transition};

    & > *:not(:empty):not(:first-child) {
        margin-left: ${({ theme }) => theme.spacing(4)};
    }

    & > * {
        filter: ${({ focused }) => (focused ? 'invert(1)' : 'none')};
    }

    ${SelectorOption} {
        opacity: ${({ focused }) => (focused ? '1' : 'none')};
    }
`;
