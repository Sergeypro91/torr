import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const AssetBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;
export const AssetContainer = styled.div<FocusedItem>`
    width: calc(100vw / 6);
    height: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: calc(9 / 16 * 100%);
    border-radius: ${({ theme }) => theme.spacing(2)};
    box-shadow: ${({ theme, focused }) =>
        focused ? `0 0 0 ${theme.spacing(2)} white` : 'none'};
    transition: all 300ms ease-out;
    overflow: hidden;
`;

export const AssetWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing(2)};
`;

export const AssetInner = styled.div``;
