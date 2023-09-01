import styled from 'styled-components';
import { ItemContainer } from '@/components';

export const PictureContentContainer = styled.section`
    grid-area: content;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    & > *:not(:first-child):not(:empty) {
        margin-top: ${({ theme }) => theme.spacing(10)};
    }
`;

export const TrailerLine = styled.div<{
    width?: number;
    height?: number;
}>`
    grid-area: result;
    padding: ${({ theme }) => theme.spacing(0, 10, 0, 0)};

    ${ItemContainer} {
        width: ${({ width }) => `${width}px`};
        height: ${({ height }) => `${height}px`};
    }

    & > * {
        ${({ theme }) => theme.hideScrollbar};
        transform: translate3d(0, 0, 0);
    }
`;
