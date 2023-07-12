import { MediaType } from '../';

export type PersonSlim = {
    tmdbId: string;
    mediaType: MediaType.PERSON;
    name: string;
    profilePath: string | null;
    popularity: number;
};
