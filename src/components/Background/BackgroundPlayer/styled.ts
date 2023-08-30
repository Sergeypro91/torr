import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const BackgroundPlayerContainer = styled.div<{ showPlayer?: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${({ showPlayer }) => (showPlayer ? 1 : 0)};
    transition: ${({ theme }) => theme.transition};
`;

export const Player = styled(ReactPlayer)`
    object-fit: cover;
    object-position: center;
    position: relative;
`;
