import React, { memo } from 'react';
import {
    WEEK_TRENDING_MOVIES,
    WEEK_TRENDING_TVS,
    NETFLIX_TRENDING_MOVIES,
    NETFLIX_TRENDING_TVS,
    APPLE_TRENDING_MOVIES,
    APPLE_TRENDING_TVS,
} from '@/hooks';
import { PictureLine } from '@/components';
import { useContent } from './useContent';
import { ContentWrapper } from './styled';
import {
    getWeeklyMovieTrends,
    getWeeklyTvTrends,
    getNetflixMovieTrends,
    getNetflixTvTrends,
    getAppleMovieTrends,
    getAppleTvTrends,
} from './requests';
import { FocusContext } from '@noriginmedia/norigin-spatial-navigation';

export const Content = memo(() => {
    const {
        FocusContext,
        ref,
        focusKey,
        paramItem,
        movieTrendsState,
        tvTrendsState,
        netflixMoviesState,
        netflixTvsState,
        appleMoviesState,
        appleTvsState,
        handleRowFocus,
        handleOnLoadFocus,
        handleAssetFocus,
    } = useContent();

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentWrapper ref={ref}>
                <PictureLine
                    name="trend movies"
                    state={movieTrendsState}
                    getTrends={getWeeklyMovieTrends}
                    queryKey={WEEK_TRENDING_MOVIES}
                    selectedItem={paramItem}
                    onRowFocus={handleRowFocus}
                    onAssetFocus={handleAssetFocus}
                    onLoadFocus={handleOnLoadFocus}
                />
                <PictureLine
                    name="trend tvs"
                    state={tvTrendsState}
                    getTrends={getWeeklyTvTrends}
                    queryKey={WEEK_TRENDING_TVS}
                    selectedItem={paramItem}
                    onRowFocus={handleRowFocus}
                    onAssetFocus={handleAssetFocus}
                />
                <PictureLine
                    name="netfilx movie trends"
                    state={netflixMoviesState}
                    getTrends={getNetflixMovieTrends}
                    queryKey={NETFLIX_TRENDING_MOVIES}
                    selectedItem={paramItem}
                    onRowFocus={handleRowFocus}
                    onAssetFocus={handleAssetFocus}
                />
                <PictureLine
                    name="netfilx serials trends"
                    state={netflixTvsState}
                    getTrends={getNetflixTvTrends}
                    queryKey={NETFLIX_TRENDING_TVS}
                    selectedItem={paramItem}
                    onRowFocus={handleRowFocus}
                    onAssetFocus={handleAssetFocus}
                />
                <PictureLine
                    name="apple movie trends"
                    state={appleMoviesState}
                    getTrends={getAppleMovieTrends}
                    queryKey={APPLE_TRENDING_MOVIES}
                    selectedItem={paramItem}
                    onRowFocus={handleRowFocus}
                    onAssetFocus={handleAssetFocus}
                />
                <PictureLine
                    name="apple serials trends"
                    state={appleTvsState}
                    getTrends={getAppleTvTrends}
                    queryKey={APPLE_TRENDING_TVS}
                    selectedItem={paramItem}
                    onRowFocus={handleRowFocus}
                    onAssetFocus={handleAssetFocus}
                />
            </ContentWrapper>
        </FocusContext.Provider>
    );
});

Content.displayName = 'Content';
