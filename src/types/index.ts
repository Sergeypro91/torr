import { PersonSlim } from './persone';
import { MovieSlim } from './movie';
import { TvSlim } from './tv';

export * from './movie';
export * from './tv';
export * from './persone';
export * from './genres';

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
    | 'profilePath';
