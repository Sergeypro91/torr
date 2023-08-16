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
    useVariableNavStore,
} from '@/stores';
import { SelectElement } from '@/types';
import {
    APPLE_TRENDING_TVS,
    APPLE_TRENDING_MOVIES,
    NETFLIX_TRENDING_MOVIES,
    NETFLIX_TRENDING_TVS,
    WEEK_TRENDING_TVS,
} from '@/hooks';
import { PictureLineStore } from '@/components';
import { contentList } from '@/components/Content/constnats';

export const useContent = () => {
    const params = useRouteStore((state) => state.getParams());
    const setAsset = useAppStore((state) => state.setAsset);
    const setVariableNav = useVariableNavStore((state) => state.setVariableNav);
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
        }, 100);
    }, []);

    const handleAssetFocus = useCallback(
        (layout: HTMLElement, asset: SelectElement) => {
            setTimeout(() => {
                layout?.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth',
                    inline: 'center',
                });
            });

            setAsset(asset);
        },
        [setAsset],
    );

    const getState = (key: string): PictureLineStore<any> => {
        switch (key) {
            case WEEK_TRENDING_TVS()[0]:
                return tvTrendsState;
            case NETFLIX_TRENDING_MOVIES()[0]:
                return netflixMoviesState;
            case NETFLIX_TRENDING_TVS()[0]:
                return netflixTvsState;
            case APPLE_TRENDING_MOVIES()[0]:
                return appleMoviesState;
            case APPLE_TRENDING_TVS()[0]:
                return appleTvsState;
            default:
                return movieTrendsState;
        }
    };

    useEffect(() => {
        if (paramItem) {
            setFocus(paramItem);
        }

        const contentNav = contentList.map((elem) => ({
            title: elem.name,
            link: `${elem.queryKey()[0]}/#${elem.queryKey()[0]}`,
        }));

        setVariableNav(contentNav);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        FocusContext,
        ref,
        focusKey,
        paramItem,
        movieTrendsState,
        handleRowFocus,
        handleAssetFocus,
        getState,
    };
};
