export * from './movie';
export * from './tv';
export * from './persone';

export type FocusableElement = {
    title: string;
    color: string;
};

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
