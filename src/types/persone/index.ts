import { MediaType } from '../';

export type PersonSlim = {
    tmdbId: string;
    mediaType: MediaType.PERSON;
    name: string;
    profilePath: string | null;
    popularity: number;
};

export type PersonPicture = {
    tmdbId?: string;
    imdbId?: string;
    mediaType?: MediaType;
};

export type Person = {
    movies: PersonPicture[];
    tvs: PersonPicture[];
    tmdbId: string;
    imdbId?: string;
    photo?: string;
    birthday?: string;
    name?: string;
    biography?: string;
};
