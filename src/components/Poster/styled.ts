import styled from 'styled-components';

export const PosterContainer = styled.img<{ opacity?: string }>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
    opacity: ${({ opacity }) => opacity};
    transition: ${({ theme }) => theme.transition};
`;

export const PosterPreviewContainer = styled(PosterContainer)``;

export const NoImageContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

    svg {
        width: 50%;
        height: auto;
    }
`;

export const NoImageTitle = styled.h4`
    height: 100%;
    display: flex;
    position: absolute;
    padding: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.palette.white};
    align-items: flex-end;
    text-align: center;
`;
