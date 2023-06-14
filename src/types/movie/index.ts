import { MediaType } from '../';

export type MovieSlim = {
    tmdbId: number;
    mediaType: MediaType.MOVIE;
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
