import {
    Company,
    CreatedBy,
    EpisodeToAir,
    Image,
    MediaType,
    ParticipantPerson,
    PictureBase,
    Season,
    Video,
} from '../';
import { tvGenres } from '@/constants';

export type TvSlim = PictureBase & {
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
    trailer: string;
};

export type Tv = {
    backdropPath: string | null;
    createdBy: CreatedBy[];
    episodeRunTime: number[];
    firstAirDate: string;
    genres: typeof tvGenres;
    inProduction: boolean;
    lastAirDate: string;
    lastEpisodeToAir: EpisodeToAir;
    title: string;
    numberOfEpisodes: number;
    numberOfSeasons: number;
    originalName: string;
    overview: string | null;
    popularity: number;
    posterPath: string | null;
    production: Company[];
    seasons: Season[];
    status: string;
    tagline: string | null;
    type: string;
    voteAverage: number;
    videos: { results: Video[] };
    credits: { cast: ParticipantPerson[]; crew: ParticipantPerson[] };
    images: { backdrops: Image[]; logos: Image[]; posters: Image[] };
};
