import React from 'react';
import { PictureContentContainer } from './styled';
import { ParticipantPerson, Video } from '@/types';
import { TrailersList } from './TrailersList';

export type PictureContentProps = {
    videos: null | { results: Video[] };
    credits: null | { cast: ParticipantPerson[]; crew: ParticipantPerson[] };
};

export const PictureContent = (props: PictureContentProps) => {
    // TODO provide processing of different services
    const videos =
        props.videos?.results.filter(
            (video) => video.site.toLowerCase() === 'youtube',
        ) || [];

    return (
        <PictureContentContainer>
            <TrailersList videos={videos} />
        </PictureContentContainer>
    );
};
