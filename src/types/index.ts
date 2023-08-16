import { PersonSlim } from './persone';
import { MovieSlim } from './movie';
import { TvSlim } from './tv';

export * from './movie';
export * from './tv';
export * from './persone';

export type AssetType = MovieSlim | TvSlim | PersonSlim;

export type SelectElement = {
    focusId: string;
} & AssetType;

export type NavProps = {
    pathName: string;
    params?: URLSearchParams;
};

export type FocusedItem = {
    focused?: string | boolean;
    isEmpty?: boolean;
};

export enum MediaType {
    ALL = 'all',
    MOVIE = 'movie',
    TV = 'tv',
    PERSON = 'person',
}

export enum TimeWindow {
    DAY = 'day',
    WEEK = 'week',
}

export enum PictureStatus {
    RUMORED = 'Rumored',
    PLANNED = 'Planned',
    IN_PRODUCTION = 'In Production',
    POST_PRODUCTION = 'Post Production',
    RELEASED = 'Released',
    CANCELED = 'Canceled',
}

export type Pagination<T> = {
    page: number;
    results: T[];
    totalPages: number;
    totalResults: number;
};

export type ImageSize =
    | 'w45'
    | 'w92'
    | 'w154'
    | 'w185'
    | 'w300'
    | 'w342'
    | 'w500'
    | 'w780'
    | 'h632'
    | 'original';

export type ImageType =
    | 'posterPath'
    | 'hPosterPath'
    | 'backdropPath'
    | 'logoPath'
    | 'profilePath';

export type PictureBase = {
    tmdbId: string;
    mediaType: MediaType;
};

export type Company = {
    id: number;
    name: string;
    logoPath: string | null;
};

export type CreatedBy = {
    tmdbId: number;
    name: string;
    profilePath: string | null;
};

export type EpisodeToAir = {
    airDate: string;
    episodeNumber: number;
    id: number;
    name: string;
    overview: string;
    seasonNumber: number;
    stillPath: string | null;
    voteAverage: number;
};

export type Season = {
    airDate: string;
    episodeCount: number;
    id: number;
    name: string;
    overview: string;
    posterPath: string | null;
    seasonNumber: number;
};

export type Video = {
    iso?: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    publishedAt: string;
};

export type ParticipantPerson = {
    tmdbId: number;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string | null;
};

export type Image = {
    aspectRatio: number;
    filePath: string;
    height: number;
    iso: string | null;
    voteAverage: number;
    width: number;
};
