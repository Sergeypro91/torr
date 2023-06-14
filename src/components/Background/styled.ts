import styled from 'styled-components';

export const BackgroundContainer = styled.div<{ img: any; blur?: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.transition};
    background-size: cover;
    background-image: url(${({ img }) => img});

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: ${({ blur }) => (blur ? 'blur(25px)' : '')};
        background: ${({ blur }) =>
            blur
                ? 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
                : 'linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)'};
        transition: ${({ theme }) => theme.transition};
    }
`;
