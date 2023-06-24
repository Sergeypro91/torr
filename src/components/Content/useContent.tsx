import React, { useCallback, useEffect, useMemo } from 'react';
import { ApiResponse } from 'openapi-typescript-fetch';
import { getTrends } from '@/api';
import {
    FocusContext,
    FocusableComponentLayout,
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

export const useContent = () => {
    const params = useRouteStore((state) => state.getParams());
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const selectAsset = useAppStore((state) => state.selectAsset);
    const movieTrendsState = useTrendingMoviesStore((state) => state);
    const { ref, setFocus, focusKey } = useFocusable({
        focusable: true,
        trackChildren: true,
    });

    const selectedAssetId = useMemo(() => {
        return params['selectedAssetId'] || null;
    }, [params]);

    const handleFocus = useCallback(
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

    const handleFocusOnLoad = useCallback(
        (id: string) => {
            if (!selectedAssetId) {
                setFocus(id);
            }
        },
        [selectedAssetId, setFocus],
    );

    const handleSelectAsset = useCallback(
        (asset: SelectElement) => {
            if (asset.focusId !== selectedAsset?.focusId) {
                selectAsset(asset);
            }
        },
        [selectAsset, selectedAsset],
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

    return {
        FocusContext,
        ref,
        focusKey,
        movieTrendsState,
        getWeeklyMovieTrends,
        handleFocus,
        handleFocusOnLoad,
        handleSelectAsset,
    };
};
