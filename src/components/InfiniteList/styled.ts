import styled from 'styled-components';
import { FixedSizeList } from 'react-window';

export const ListContainer = styled(FixedSizeList)<{ gap?: number }>`
    ${({ theme }) => theme.hideScrollbar}

    & > *:last-child {
        margin-right: ${({ gap }) => `${gap}px`};
    }
`;
