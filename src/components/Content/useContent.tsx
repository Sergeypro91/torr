import React, { useCallback, useEffect, useMemo } from 'react';
import { debounce } from 'lodash-es';
import { ApiResponse } from 'openapi-typescript-fetch';
import { getTrends } from '@/api';
import {
    FocusContext,
    FocusableComponentLayout,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useAppStore, useRouteStore, useTrendingMoviesStore } from '@/stores';
import {
    MediaType,
    MovieSlim,
    Pagination,
    SelectElement,
    TimeWindow,
} from '@/types';

export const useContent = () => {
    const params = useRouteStore((state) => state.getParams());
    const selectAsset = useAppStore((state) => state.selectAsset);
    const movieTrendsState = useTrendingMoviesStore((state) => state);
    const { ref, setFocus, focusKey } = useFocusable({
        focusable: true,
        trackChildren: true,
    });

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

    const paramItem = useMemo(() => {
        return params['selectedAssetId'] || null;
    }, [params]);

    const handleRowFocus = useCallback(
        (layout: FocusableComponentLayout) => {
            ref.current.scrollTo({
                top: layout.y,
                behavior: 'smooth',
            });
        },
        [ref],
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const selectAssetDebounce = useCallback(
        debounce((asset: SelectElement) => {
            selectAsset(asset);
        }, 600),
        [],
    );

    const handleAssetFocus = useCallback(
        (layout: FocusableComponentLayout, asset: SelectElement) => {
            layout.node.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth',
                inline: 'center',
            });

            selectAssetDebounce(asset);
        },
        [selectAssetDebounce],
    );

    const handleOnLoadFocus = useCallback(
        (id: string) => {
            if (!paramItem) {
                setFocus(id);
            }
        },
        [paramItem, setFocus],
    );

    useEffect(() => {
        if (paramItem) {
            setFocus(paramItem);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        FocusContext,
        ref,
        focusKey,
        paramItem,
        movieTrendsState,
        getWeeklyMovieTrends,
        handleRowFocus,
        handleOnLoadFocus,
        handleAssetFocus,
    };
};
