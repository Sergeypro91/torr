import {
    MediaType,
    Company,
    PictureStatus,
    Video,
    ParticipantPerson,
    Image,
    PictureBase,
} from '../';
import { movieGenres } from '@/constants';

export type MovieSlim = PictureBase & {
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
    trailer: string;
};

export type Movie = PictureBase & {
    mediaType: MediaType.MOVIE;
    backdropPath: string | null;
    budget: number;
    genres: typeof movieGenres;
    originalTitle: string;
    overview: string | null;
    popularity: number;
    posterPath: string | null;
    production: Company[];
    releaseDate: string;
    revenue: number;
    runtime: number | null;
    status: PictureStatus;
    tagline: string | null;
    title: string;
    voteAverage: number;
    videos: { results: Video[] };
    credits: { cast: ParticipantPerson[]; crew: ParticipantPerson[] };
    images: { backdrops: Image[]; logos: Image[]; posters: Image[] };
};
