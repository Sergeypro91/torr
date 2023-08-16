import React from 'react';
import { PictureContentContainer } from './styled';
import { ParticipantPerson, Video } from '@/types';
import { TrailersList } from './TrailersList';

export type PictureContentProps = {
    videos: null | { results: Video[] };
    credits: null | { cast: ParticipantPerson[]; crew: ParticipantPerson[] };
};

export const PictureContent = (props: PictureContentProps) => {
    const videos = props.videos?.results || [];

    return (
        <PictureContentContainer>
            <TrailersList videos={videos} />
        </PictureContentContainer>
    );
};
