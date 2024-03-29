import styled from 'styled-components';

export const BackgroundContent = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
`;

export const BackgroundItem = styled.div`
    width: 100%;
    height: 100%;
    animation: appearance 300ms ease-in;

    @keyframes appearance {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const BackgroundContainer = styled.div<{
    poster?: string;
    blur?: boolean;
    isPlaying?: boolean;
}>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.transition};

    &:after {
        content: '';
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: ${({ blur }) => (blur ? 'blur(25px)' : '')};
        background: ${({ blur }) =>
            blur
                ? 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
                : 'linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)'};
        opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
        transition: ${({ theme }) => theme.transition};
        will-change: background, opacity;
        transform: translate3d(0, 0, 0);
    }
`;
