import React, { useMemo } from 'react';
import { ParticipantPerson, Video } from '@/types';
import { filterVideos, sortAndFilterCredits } from './utils';
import { TrailersList } from './TrailersList';
import { PersonsList } from './PersonsList';
import { PictureContentContainer } from './styled';

export type PictureContentProps = {
    videos: null | { results: Video[] };
    credits: null | { cast: ParticipantPerson[]; crew: ParticipantPerson[] };
};

export const PictureContent = (props: PictureContentProps) => {
    // TODO provide processing of different services
    const videos = useMemo(
        () => filterVideos(props.videos?.results),
        [props.videos],
    );

    const { crew, cast } = useMemo(
        () => ({
            cast: sortAndFilterCredits(props.credits?.cast),
            crew: sortAndFilterCredits(props.credits?.crew),
        }),
        [props.credits],
    );

    return (
        <PictureContentContainer>
            <TrailersList
                rowId="trailer"
                rowTitle="Trialers"
                dataState={videos}
            />
            <PersonsList rowId="crew" rowTitle="Crew" dataState={crew} />
            <PersonsList rowId="cast" rowTitle="Cast" dataState={cast} />
        </PictureContentContainer>
    );
};
