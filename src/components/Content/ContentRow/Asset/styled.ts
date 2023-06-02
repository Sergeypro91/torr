import styled from 'styled-components';
import { rgba } from 'polished';
import { AssetBoxProps } from './types';

export const AssetContainer = styled.div<AssetBoxProps>`
    width: calc(100vw / 6);
    height: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: calc(9 / 16 * 100%);
    overflow: hidden;

    background-color: ${() => rgba('white', 0.15)};
    border-radius: calc(100vw / 100);
    box-shadow: ${({ focused }) =>
        focused ? '0 0 0 calc(100vw / 300) white' : 'none'};
    transition: all 300ms ease-out;
`;

export const AssetWrapper = styled.div`
    padding: calc(100vw / 300);
`;

export const AssetInner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${() => rgba('white', 0.15)};
`;
