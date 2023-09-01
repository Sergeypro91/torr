import React from 'react';
import { Poster } from '@/components';
import { useBackground } from './useBackground';
import { BackgroundPlayer } from './BackgroundPlayer';
import { BackgroundContainer, BackgroundItem } from './styled';

type BackgroundProps = {
    id?: string;
};

export const Background = ({ id }: BackgroundProps) => {
    const { blur, isPlaying, assets } = useBackground();

    return (
        <BackgroundContainer id={id} blur={blur} isPlaying={isPlaying}>
            {[...assets].reverse().map((asset) => (
                <BackgroundItem key={`${asset.tmdbId}${asset.mediaType}`}>
                    <Poster data={asset} type="backdropPath" />
                </BackgroundItem>
            ))}
            <BackgroundPlayer />
        </BackgroundContainer>
    );
};
