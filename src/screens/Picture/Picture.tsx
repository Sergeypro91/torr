import React from 'react';
import { PictureInfo, PictureContent } from '@/components';
import { PictureContainer, PictureHeader } from './styled';
import { usePicture } from '@/screens/Picture/usePicture';

export const Picture = () => {
    const {
        ref,
        focusKey,
        FocusContext,
        credits,
        videos,
        tagline,
        production,
        isPlaying,
    } = usePicture();

    return (
        <FocusContext.Provider value={focusKey}>
            <PictureContainer ref={ref} isShown={!isPlaying}>
                <PictureHeader />
                <PictureInfo {...{ tagline, production }} />
                <PictureContent {...{ credits, videos }} />
            </PictureContainer>
        </FocusContext.Provider>
    );
};
