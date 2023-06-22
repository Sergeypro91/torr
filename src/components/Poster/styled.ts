import styled from 'styled-components';
import { Blurhash } from 'react-blurhash';

export type ImageContainerProps = Partial<{
    blur: boolean;
    isLoaded: boolean;
}>;
export const PosterContainer = styled.img<ImageContainerProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
    opacity: ${({ isLoaded }) => (isLoaded ? '1' : '0')};
    transition: ${({ theme }) => theme.transition};
`;
export const BlurHashContainer = styled(Blurhash)`
    position: absolute !important;
    top: 0;
    left: 0;
`;
