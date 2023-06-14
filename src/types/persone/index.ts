import { MediaType } from '../';

export type PersonSlim = {
    tmdbId: number;
    mediaType: MediaType.PERSON;
    name: string;
    profilePath: string | null;
    popularity: number;
};
