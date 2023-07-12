import styled, { DefaultTheme } from 'styled-components';

const getColor = ({
    theme,
    percent,
}: {
    theme: DefaultTheme;
    percent: number;
}): string => {
    if (percent < 40) {
        return theme.palette.error;
    }

    if (percent < 70) {
        return theme.palette.warning;
    }

    return theme.palette.success;
};

export const RingRatingContainer = styled.div<{ size: number }>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    position: relative;
`;

export const Pie = styled.svg<{ size: number }>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
`;
export const FillRing = styled.circle`
    stroke: rgba(255, 255, 255, 0.3);
`;
export const PercentRing = styled.circle<{ percent: number }>`
    opacity: ${({ percent }) => (percent ? '1' : '0')};
    stroke: ${({ theme, percent }) => getColor({ theme, percent })};
    fill: none;
    transform: rotate(-90deg);
    transform-origin: center;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
    transition: ${({ theme }) => theme.transition};
    will-change: transform;
`;

export const Rate = styled.h3`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-weight: 600;
`;
