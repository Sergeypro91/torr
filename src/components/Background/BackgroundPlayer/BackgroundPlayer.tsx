import React from 'react';
import { useBackgroundPlayer } from './useBackgroundPlayer';
import { BackgroundPlayerContainer, Player } from './styled';

export const BackgroundPlayer = () => {
    const {
        ref,
        videoUrl,
        playing,
        showPlayer,
        handleKeyDown,
        onTrailerStart,
        onTrailerEnd,
        onTrailerError,
    } = useBackgroundPlayer();

    return (
        <BackgroundPlayerContainer
            ref={ref}
            showPlayer={showPlayer}
            onKeyDown={handleKeyDown}
        >
            {videoUrl ? (
                <Player
                    url={videoUrl}
                    playing={playing}
                    width="100%"
                    height="100%"
                    onStart={onTrailerStart}
                    onEnded={onTrailerEnd}
                    onError={onTrailerError}
                />
            ) : null}
        </BackgroundPlayerContainer>
    );
};
