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
