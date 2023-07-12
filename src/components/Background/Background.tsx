import React from 'react';
import {
    BackgroundContent,
    BackgroundItem,
    Poster,
    Trailer,
} from '@/components';
import { useBackground } from './useBackground';
import { BackgroundBackground, BackgroundContainer } from './styled';
import { MediaType } from '@/types';

type BackgroundProps = {
    id?: string;
};

export const Background = ({ id }: BackgroundProps) => {
    const {
        blur,
        assets,
        title,
        data,
        renderTrailer,
        showTrailer,
        onTrailerStart,
        onTrailerEnd,
        onTrailerError,
    } = useBackground();

    return (
        <BackgroundContainer id={id} blur={blur} showTrailer={showTrailer}>
            <BackgroundBackground>
                {[...assets].reverse().map((asset) => (
                    <BackgroundItem key={`${asset.tmdbId}${asset.mediaType}`}>
                        <Poster data={asset} type="backdropPath" />
                        {renderTrailer &&
                        asset.mediaType !== MediaType.PERSON ? (
                            <Trailer
                                url={asset.trailer}
                                playing={true}
                                muted={false}
                                width="100%"
                                height="100%"
                                onStart={onTrailerStart}
                                onEnded={onTrailerEnd}
                                onError={onTrailerError}
                            />
                        ) : null}
                    </BackgroundItem>
                ))}
            </BackgroundBackground>
            <BackgroundContent>
                <h3>{title}</h3>
                <p>{data}</p>
            </BackgroundContent>
        </BackgroundContainer>
    );
};
