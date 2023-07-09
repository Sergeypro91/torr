import { ApiResponse } from 'openapi-typescript-fetch';
import { MediaType, MovieSlim, Pagination, TimeWindow, TvSlim } from '@/types';
import { getNetworkPictures, getTrends } from '@/api';

export const getWeeklyMovieTrends = async (
    page?: number,
): Promise<ApiResponse<Pagination<MovieSlim>>> =>
    // TODO find way to typing enum string literal in generated documentation
    // @ts-ignore
    getTrends({
        mediaType: MediaType.MOVIE,
        timeWindow: TimeWindow.WEEK,
        page,
    });

export const getWeeklyTvTrends = async (
    page?: number,
): Promise<ApiResponse<Pagination<MovieSlim>>> =>
    // TODO find way to typing enum string literal in generated documentation
    // @ts-ignore
    getTrends({
        mediaType: MediaType.TV,
        timeWindow: TimeWindow.WEEK,
        page,
    });

export const getNetflixMovieTrends = async (
    page?: number,
): Promise<ApiResponse<Pagination<TvSlim>>> =>
    // TODO find way to typing enum string literal in generated documentation
    // @ts-ignore
    getNetworkPictures({
        mediaType: MediaType.MOVIE,
        network: 213,
        page,
    });

export const getNetflixTvTrends = async (
    page?: number,
): Promise<ApiResponse<Pagination<TvSlim>>> =>
    // TODO find way to typing enum string literal in generated documentation
    // @ts-ignore
    getNetworkPictures({
        mediaType: MediaType.TV,
        network: 213,
        page,
    });

export const getAppleMovieTrends = async (
    page?: number,
): Promise<ApiResponse<Pagination<TvSlim>>> =>
    // TODO find way to typing enum string literal in generated documentation
    // @ts-ignore
    getNetworkPictures({
        mediaType: MediaType.MOVIE,
        network: 2552,
        page,
    });

export const getAppleTvTrends = async (
    page?: number,
): Promise<ApiResponse<Pagination<TvSlim>>> =>
    // TODO find way to typing enum string literal in generated documentation
    // @ts-ignore
    getNetworkPictures({
        mediaType: MediaType.TV,
        network: 2552,
        page,
    });
