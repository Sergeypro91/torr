import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { VirtuosoGridHandle } from 'react-virtuoso';
import { useQuery } from '@tanstack/react-query';
import { searchPicture } from '@/api';
import { useAppStore, useRouteStore, useSearchStore } from '@/stores';
import { SelectElement } from '@/types';
import { SEARCH_PICTURE } from '@/hooks';
import { decipherAssetId, getAssetGridSize } from '@/utils';
import { RequestOptions, ScrollOptions, SearchResultProps } from './types';

export const useSearchResult = ({
    rowId = 'search',
    rowCount = 5,
    gap = 40,
}: SearchResultProps) => {
    const params = useRouteStore((state) => state.getParams());
    const setParams = useRouteStore((state) => state.setParams);
    const {
        dataState,
        searchPage,
        searchQuery,
        searchFilter,
        setSearchPage,
        setDataState,
    } = useSearchStore((state) => state);
    const searchData = useSearchStore(
        (state) => state.dataState?.results ?? [],
    );
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const selectAsset = useAppStore((state) => state.selectAsset);
    const virtuosoRef = useRef<VirtuosoGridHandle>(null);

    const { ref, focusKey, setFocus } = useFocusable({
        focusKey: rowId,
        trackChildren: true,
    });

    const selectedAssetParam = useMemo(() => {
        return params['selectedAssetId'] || null;
    }, [params]);
    const request = async ({ query, mediaType, page }: RequestOptions) => {
        const { data } = await searchPicture({ query, mediaType, page });

        return data;
    };

    const { data, isFetching } = useQuery({
        queryKey: SEARCH_PICTURE({
            query: searchQuery,
            filter: searchFilter,
            page: searchPage,
        }),
        queryFn: () =>
            request({
                query: searchQuery,
                mediaType: searchFilter,
                page: searchPage,
            }),
        keepPreviousData: true,
        enabled: !!searchPage && !!searchQuery && !!searchFilter,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const requestMore = () => {
        const dataPage = data?.page;

        if (!isFetching) {
            setSearchPage(
                dataPage === searchPage ? searchPage + 1 : searchPage,
            );
        }
    };

    const assetSize = useMemo(() => {
        if (ref.current) {
            const { paddingLeft, paddingRight } = getComputedStyle(ref.current);
            const width =
                ref.current.offsetWidth -
                parseFloat(paddingLeft) -
                parseFloat(paddingRight);

            return getAssetGridSize({
                rowWidth: width,
                gap,
                rowCount,
                ratio: 3 / 2,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current, gap, rowCount]);

    const handleAssetFocus = useCallback(
        (layout: HTMLElement, asset: SelectElement) => {
            setTimeout(() => {
                layout.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth',
                });
            });

            selectAsset(asset);
        },
        [selectAsset],
    );

    const scrollToItem = ({ element, index }: ScrollOptions) => {
        setTimeout(() => {
            element.scrollToIndex({
                index,
                align: 'center',
            });
        }, 300);
    };

    useEffect(() => {
        if (data) {
            setDataState(data);
        }
    }, [data, setDataState]);

    useEffect(() => {
        if (!searchData.length) {
            selectAsset(null);
        }
    }, [searchData, selectAsset, setFocus]);

    useEffect(() => {
        if (selectedAssetParam && searchData && virtuosoRef.current) {
            const { tmdbId, mediaType } = decipherAssetId(selectedAssetParam);
            const selectedItemDataIndex = searchData.findIndex(
                (item) =>
                    `${item.tmdbId}${item.mediaType}` ===
                    `${tmdbId}${mediaType}`,
            );

            scrollToItem({
                element: virtuosoRef.current,
                index: selectedItemDataIndex,
            });

            setTimeout(() => {
                setFocus(selectedAssetParam);
            }, 600);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (selectedAssetParam !== selectedAsset?.focusId) {
            setParams({ selectedAssetId: selectedAsset?.focusId ?? '' });
        }
    }, [selectedAsset, selectedAssetParam, setParams]);

    // useEffect(() => {
    //     const asset = dataState?.results[0];
    //
    //     if (!isLoading && !selectedAsset && !selectedAssetParam && asset) {
    //         console.log('TEST 3');
    //         const test = createAssetId(rowId, asset.tmdbId, asset.mediaType);
    //         setFocus(test);
    //     }
    // }, [
    //     dataState,
    //     isLoading,
    //     rowId,
    //     selectedAsset,
    //     selectedAssetParam,
    //     setFocus,
    // ]);

    return {
        FocusContext,
        ref,
        virtuosoRef,
        focusKey,
        rowId,
        assetSize,
        dataState,
        searchData,
        isLoading: isFetching,
        requestMore,
        handleAssetFocus,
    };
};
