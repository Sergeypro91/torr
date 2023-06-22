import React, { useCallback, useEffect, memo, useMemo } from 'react';
import { ApiResponse } from 'openapi-typescript-fetch';
import { getTrends } from '@/api';
import {
    FocusableComponentLayout,
    FocusContext,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useAppStore, useRouteStore, useTrendingMoviesStore } from '@/stores';
import {
    AssetType,
    MediaType,
    MovieSlim,
    Pagination,
    SelectElement,
    TimeWindow,
} from '@/types';
import { Trends } from '@/components';
import { WEEK_TRENDING_MOVIES } from '@/hooks';
import { ContentWrapper } from './styled';
import { debounce } from 'lodash-es';

export const Content = memo(() => {
    const params = useRouteStore((state) => state.getParams());
    const selectAsset = useAppStore((state) => state.selectAsset);
    const movieTrendsState = useTrendingMoviesStore((state) => state);
    const { ref, focusSelf, setFocus, focusKey } = useFocusable({
        focusable: true,
        trackChildren: true,
    });

    const selectedAssetId = useMemo(() => {
        return params['selectedAssetId'] || null;
    }, [params]);

    const onFocus = useCallback(
        (
            layout: FocusableComponentLayout,
            props: AssetType,
            event: FocusDetails,
        ) => {
            ref.current.scrollTo({
                top: layout.y,
                behavior: 'smooth',
            });
        },
        [ref],
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSelectAsset = useCallback(
        debounce((asset: SelectElement) => selectAsset(asset), 300),
        [selectAsset],
    );

    const getWeeklyMovieTrends = async (
        page?: number,
    ): Promise<ApiResponse<Pagination<MovieSlim>>> =>
        // TODO find way to typing enum string literal in generated documentation
        // @ts-ignore
        getTrends({
            mediaType: MediaType.MOVIE,
            timeWindow: TimeWindow.WEEK,
            page,
        });

    useEffect(() => {
        if (selectedAssetId) {
            setFocus(selectedAssetId);
        }
    }, [selectedAssetId, setFocus]);

    const handleFocus = useCallback(
        (id: string) => {
            if (!selectedAssetId) {
                setFocus(id);
            }
        },
        [selectedAssetId, setFocus],
    );

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentWrapper ref={ref}>
                <Trends
                    name="trend movie"
                    state={movieTrendsState}
                    getTrends={getWeeklyMovieTrends}
                    queryKey={WEEK_TRENDING_MOVIES}
                    onFocus={onFocus}
                    focusOnLoad={handleFocus}
                    onSelect={handleSelectAsset}
                />
            </ContentWrapper>
        </FocusContext.Provider>
    );
});

Content.displayName = 'Content';
