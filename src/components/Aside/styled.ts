import styled from 'styled-components';
import { ElementWithFocusedChild } from '@/components/types';

export const AsideWrapper = styled.aside<ElementWithFocusedChild>`
    grid-area: aside;
    max-width: ${({ hasFocusedChild }) => (hasFocusedChild ? '100vw' : '0px')};
    transition: ${({ theme }) => theme.transition};
`;

export const AsideContainer = styled.div<ElementWithFocusedChild>`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(8)};
    white-space: nowrap;
    opacity: ${({ hasFocusedChild }) => (hasFocusedChild ? '1' : '0')};
    transition: ${({ theme }) => theme.transition};
`;
