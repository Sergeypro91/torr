import React from 'react';
import { BackgroundContent, BackgroundItem, Poster } from '@/components';
import { useBackground } from './useBackground';
import { BackgroundBackground, BackgroundContainer } from './styled';
import { BackgroundPlayer } from '@/components/Background/BackgroundPlayer';

type BackgroundProps = {
    id?: string;
};

export const Background = ({ id }: BackgroundProps) => {
    const { blur, assets, title, data } = useBackground();

    return (
        <BackgroundContainer id={id} blur={blur}>
            <BackgroundBackground>
                {[...assets].reverse().map((asset) => (
                    <BackgroundItem key={`${asset.tmdbId}${asset.mediaType}`}>
                        <Poster data={asset} type="backdropPath" />
                    </BackgroundItem>
                ))}
                <BackgroundPlayer />
            </BackgroundBackground>
            <BackgroundContent>
                <h3>{title}</h3>
                <p>{data}</p>
            </BackgroundContent>
        </BackgroundContainer>
    );
};
