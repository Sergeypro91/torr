import React, { useCallback, useEffect, memo } from 'react';
import { rows } from '@/assets/data';
import {
    FocusableComponentLayout,
    FocusContext,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useAppStore, useTrendingMoviesStore } from '@/stores';
import { FocusableElement, MediaType, MovieSlim, TimeWindow } from '@/types';
import { Trends } from '@/components';
import { WEEK_TRENDING_MOVIES } from '@/hooks';
import { ContentRow } from './ContentRow';
import { ContentWrapper } from './styled';

export const Content = memo(() => {
    const selectAsset = useAppStore((state) => state.selectAsset);
    const { ref, focusSelf, focusKey } = useFocusable({
        focusable: true,
        trackChildren: true,
    });

    useEffect(() => {
        focusSelf();
    }, [focusSelf]);

    const onFocus = useCallback(
        (
            layout: FocusableComponentLayout,
            props: FocusableElement,
            event: FocusDetails,
        ) => {
            ref.current.scrollTo({
                top: layout.y,
                behavior: 'smooth',
            });
        },
        [ref],
    );

    const trendMovies = useTrendingMoviesStore((state) => state.trendMovies);
    const setTrendMovies = useTrendingMoviesStore(
        (state) => state.setTrendMovies,
    );

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentWrapper ref={ref}>
                <Trends<MovieSlim>
                    trendsState={trendMovies}
                    setTrendsState={setTrendMovies}
                    mediaType={MediaType.MOVIE}
                    timeWindow={TimeWindow.WEEK}
                    queryKey={WEEK_TRENDING_MOVIES}
                />
                {rows.map(({ title }, id) => (
                    <ContentRow
                        key={`content-${title}-${id}`}
                        section={title}
                        onFocus={onFocus}
                        setSelectedAsset={selectAsset}
                    />
                ))}
            </ContentWrapper>
        </FocusContext.Provider>
    );
});

Content.displayName = 'Content';
