import styled from 'styled-components';
import { FocusedItem } from '@/types';

export const AssetBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${({ theme }) => theme.spacing(2)};
`;
export const AssetContainer = styled.div<FocusedItem>`
    width: calc(100vw / 6);
    height: calc(9 / 16 * (100vw / 6));
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.spacing(2)};
    box-shadow: ${({ theme, focused }) =>
        focused ? `0 0 0 ${theme.spacing(2)} white` : 'none'};
    transition: ${({ theme }) => theme.transition};
    overflow: hidden;
`;

export const AssetWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing(2)};
    cursor: pointer;
`;

export const AssetInner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: ${({ theme }) => theme.transition};

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

export const AssetSkeleton = styled(AssetWrapper)`
    &::after {
        ${AssetContainer.componentStyle['rules']};
        content: '';
        opacity: 0.5;
        animation: shine 1.5s infinite linear;

        ${({ theme }) => theme.skeleton};
    }

    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }
`;
