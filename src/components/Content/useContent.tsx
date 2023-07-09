import React, { useCallback, useEffect, useMemo } from 'react';
import {
    FocusContext,
    FocusableComponentLayout,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import {
    useAppStore,
    useRouteStore,
    useNetflixTvsStore,
    useTrendingMoviesStore,
    useTrendingTvsStore,
    useNetflixMoviesStore,
    useAppleMoviesStore,
    useAppleTvsStore,
} from '@/stores';
import { SelectElement } from '@/types';

export const useContent = () => {
    const params = useRouteStore((state) => state.getParams());
    const selectAsset = useAppStore((state) => state.selectAsset);
    const movieTrendsState = useTrendingMoviesStore((state) => state);
    const tvTrendsState = useTrendingTvsStore((state) => state);
    const netflixMoviesState = useNetflixMoviesStore((state) => state);
    const netflixTvsState = useNetflixTvsStore((state) => state);
    const appleMoviesState = useAppleMoviesStore((state) => state);
    const appleTvsState = useAppleTvsStore((state) => state);
    const { ref, setFocus, focusKey } = useFocusable({
        focusable: true,
        trackChildren: true,
    });

    const paramItem = useMemo(() => {
        return params['selectedAssetId'] || null;
    }, [params]);

    const handleRowFocus = useCallback((layout: FocusableComponentLayout) => {
        setTimeout(() => {
            layout.node.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
                inline: 'start',
            });
        });
    }, []);

    const handleAssetFocus = useCallback(
        (layout: FocusableComponentLayout, asset: SelectElement) => {
            setTimeout(() => {
                layout.node.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth',
                    inline: 'center',
                });
            });

            selectAsset(asset);
        },
        [selectAsset],
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
        tvTrendsState,
        netflixMoviesState,
        netflixTvsState,
        appleMoviesState,
        appleTvsState,
        handleRowFocus,
        handleOnLoadFocus,
        handleAssetFocus,
    };
};
