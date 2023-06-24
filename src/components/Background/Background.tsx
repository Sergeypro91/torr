import React from 'react';
import { BackgroundContent, BackgroundItem, Poster } from '@/components';
import { useBackground } from './useBackground';
import { BackgroundContainer, BackgroundBackground } from './styled';

export const Background = () => {
    const { blur, assets, title, data } = useBackground();

    return (
        <BackgroundContainer blur={blur}>
            <BackgroundBackground>
                {[...assets].reverse().map((asset) => (
                    <BackgroundItem key={asset.tmdbId}>
                        <Poster data={asset} type="backdropPath" />
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
