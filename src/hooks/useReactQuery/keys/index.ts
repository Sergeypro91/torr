import { searchPicture, getPictureById } from '@/api';

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
    mediaType,
    page = 1,
}: Parameters<typeof searchPicture>[0]) => [
    'search picture',
    query,
    mediaType,
    page,
];

export const GET_PICTURE_BY_ID = ({
    tmdbId,
    mediaType,
}: Parameters<typeof getPictureById>[0]) => [
    'get picture by id',
    tmdbId,
    mediaType,
];
