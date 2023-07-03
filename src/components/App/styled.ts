import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
`;

export const AppWrapper = styled.div<FocusedItem>`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw + 350px);
    height: 100%;
    display: flex;
    transform: ${({ focused }) => (focused ? '' : 'translate3D(-350px, 0, 0)')};
    transition: ${({ theme }) => theme.transition};
    overflow: hidden;
`;
