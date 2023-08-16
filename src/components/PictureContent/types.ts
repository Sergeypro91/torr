import { ParticipantPerson, Video } from '@/types';

export type PictureContentProps = {
    videos: null | { results: Video[] };
    credits: null | { cast: ParticipantPerson[]; crew: ParticipantPerson[] };
};
