export const WEEK_TRENDING_MOVIES = (page: number = 1) => [
    'week trending movies',
    page,
];

export const WEEK_TRENDING_TVS = (page: number = 1) => [
    'week trending tvs',
    page,
];

export const NETFLIX_TRENDING_MOVIES = (page: number = 1) => [
    'netflix trending movies',
    page,
];

export const NETFLIX_TRENDING_TVS = (page: number = 1) => [
    'netflix trending tvs',
    page,
];

export const APPLE_TRENDING_MOVIES = (page: number = 1) => [
    'apple trending movies',
    page,
];

export const APPLE_TRENDING_TVS = (page: number = 1) => [
    'apple trending tvs',
    page,
];

export const SEARCH_PICTURE = ({
    query,
    filter,
    page = 1,
}: {
    query: string;
    filter?: string;
    page: number;
}) => ['search picture', query, filter, page];
