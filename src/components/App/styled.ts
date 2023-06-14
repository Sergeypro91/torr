import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const AppContainer = styled.div`
    min-width: 1920px;
    min-height: 1080px;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
`;

export const AppWrapper = styled.div<FocusedItem>`
    display: flex;
    transform: ${({ focused }) => (focused ? '' : 'translate(-350px)')};
    transition: ${({ theme }) => theme.transition};
`;
