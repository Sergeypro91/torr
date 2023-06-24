import styled from 'styled-components';
import { Blurhash } from 'react-blurhash';

export const PosterContainer = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
`;
export const BlurHashContainer = styled(Blurhash)<{ opacity?: string }>`
    position: absolute !important;
    top: 0;
    left: 0;
    opacity: ${({ opacity }) => opacity};
    transition: ${({ theme }) => theme.transition};
`;
