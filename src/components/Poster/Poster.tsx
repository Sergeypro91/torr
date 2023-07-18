import React, { useMemo, useState } from 'react';
import { getImageSrc, getImageTitle } from '@/utils';
import { TvSlim, MovieSlim, PersonSlim, ImageSize, ImageType } from '@/types';
import {
    NoImageContainer,
    NoImageTitle,
    PosterContainer,
    PosterPreviewContainer,
} from './styled';
import { NoImage } from '@/assets/images/svgr';

export type PosterProps = {
    data?: Partial<MovieSlim | TvSlim | PersonSlim> | null;
    alt?: string;
    size?: ImageSize;
    type?: ImageType;
    onLoad?: (isLoaded?: boolean) => void;
};

export const Poster = ({
    data,
    alt,
    size = 'original',
    type = 'posterPath',
    onLoad = () => {},
}: PosterProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const title = useMemo(() => {
        return data ? getImageTitle(data) : '';
    }, [data]);

    const imageSrc = useMemo(() => {
        return data ? getImageSrc({ data, size, type }) : '';
    }, [data, size, type]);

    const imagePreviewSrc = useMemo(() => {
        return data ? getImageSrc({ data, size: 'w45', type }) : '';
    }, [data, type]);

    const handleLoad = () => {
        onLoad(true);
        setIsLoaded(true);
    };

    if (!data) {
        return null;
    }

    return imageSrc || imagePreviewSrc ? (
        <>
            <PosterPreviewContainer
                src={imagePreviewSrc}
                alt={alt ?? title}
                loading="lazy"
            />
            <PosterContainer
                src={imageSrc}
                alt={alt ?? title}
                loading="lazy"
                onLoad={handleLoad}
                opacity={isLoaded ? '1' : '0'}
            />
        </>
    ) : (
        <NoImageContainer>
            <NoImageTitle>{title}</NoImageTitle>
            <NoImage />
        </NoImageContainer>
    );
};
