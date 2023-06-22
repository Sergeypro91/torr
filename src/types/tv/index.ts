import { MediaType } from '../';

export type TvSlim = {
    tmdbId: string;
    mediaType: MediaType.TV;
    posterPath: string | null;
    hPosterPath: string | null;
    backdropPath: string | null;
    posterPathBlurHash: string | null;
    hPosterPathBlurHash: string | null;
    backdropPathBlurHash: string | null;
    title: string;
    originalTitle: string;
    overview: string | null;
    genres: number[];
    releaseDate: string;
    popularity: number;
    voteAverage: number;
};
