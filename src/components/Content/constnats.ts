import {
    getAppleMovieTrends,
    getAppleTvTrends,
    getNetflixMovieTrends,
    getNetflixTvTrends,
    getWeeklyMovieTrends,
    getWeeklyTvTrends,
} from '@/components/Content/requests';
import {
    APPLE_TRENDING_MOVIES,
    APPLE_TRENDING_TVS,
    NETFLIX_TRENDING_MOVIES,
    NETFLIX_TRENDING_TVS,
    WEEK_TRENDING_MOVIES,
    WEEK_TRENDING_TVS,
} from '@/hooks';

export const contentList = [
    {
        name: 'trend movies',
        getTrends: getWeeklyMovieTrends,
        queryKey: WEEK_TRENDING_MOVIES,
    },
    {
        name: 'trend tvs',
        getTrends: getWeeklyTvTrends,
        queryKey: WEEK_TRENDING_TVS,
    },
    {
        name: 'netflix movie trends',
        getTrends: getNetflixMovieTrends,
        queryKey: NETFLIX_TRENDING_MOVIES,
    },
    {
        name: 'netflix serials trends',
        getTrends: getNetflixTvTrends,
        queryKey: NETFLIX_TRENDING_TVS,
    },
    {
        name: 'apple movie trends',
        getTrends: getAppleMovieTrends,
        queryKey: APPLE_TRENDING_MOVIES,
    },
    {
        name: 'apple serials trends',
        getTrends: getAppleTvTrends,
        queryKey: APPLE_TRENDING_TVS,
    },
];
