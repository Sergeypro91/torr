import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
`;

export const AppWrapper = styled.div<FocusedItem>`
    display: flex;
    transform: ${({ focused }) => (focused ? '' : 'translate3D(-350px, 0, 0)')};
    transition: ${({ theme }) => theme.transition};
`;
