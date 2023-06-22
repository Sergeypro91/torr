import React, { useMemo, useState } from 'react';
import { getImageBlurHash, getImageSrc, getImageTitle } from '@/utils';
import { TvSlim, MovieSlim, PersonSlim, ImageSize, ImageType } from '@/types';
import { BlurHashContainer, PosterContainer } from './styled';

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

    const blurHash = useMemo(() => {
        return data ? getImageBlurHash({ data, type }) : null;
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
            {blurHash ? (
                <BlurHashContainer
                    hash={blurHash}
                    width={'100%'}
                    height={'100%'}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            ) : null}
            <PosterContainer
                isLoaded={isLoaded}
                src={imageSrc}
                alt={alt || title}
                loading="lazy"
                onLoad={handleLoad}
            />
        </>
    );
};
