import React, { useMemo, useState } from 'react';
import { getImageSrc, getImageTitle } from '@/utils';
import { TvSlim, MovieSlim, PersonSlim, ImageSize, ImageType } from '@/types';
import { PosterContainer, PosterPreviewContainer } from './styled';

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

    return (
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
    );
};
