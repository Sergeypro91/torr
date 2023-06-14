import { MediaType } from '../';

export type TvSlim = {
    tmdbId: number;
    mediaType: MediaType.TV;
    posterPath: string | null;
    hPosterPath: string | null;
    backdropPath: string | null;
    title: string;
    originalTitle: string;
    overview: string | null;
    genres: number[];
    releaseDate: string;
    popularity: number;
    voteAverage: number;
};
