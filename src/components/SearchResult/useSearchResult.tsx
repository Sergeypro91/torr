import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { VirtuosoGridHandle } from 'react-virtuoso';
import { useQuery } from '@tanstack/react-query';
import { searchPicture } from '@/api';
import { useAppStore, useRouteStore, useSearchStore } from '@/stores';
import { AssetType, SelectElement } from '@/types';
import { SEARCH_PICTURE } from '@/hooks';
import {
    decipherAssetId,
    getAssetGridSize,
    scrollTo,
    scrollToItem,
} from '@/utils';
import { SearchResultProps } from './types';
import { ItemContent } from './ItemContent';

export const useSearchResult = ({
    rowId = 'search',
    rowCount = 5,
    gap = 40,
}: SearchResultProps) => {
    const params = useRouteStore((state) => state.getParams());
    const setParams = useRouteStore((state) => state.setParams);
    const {
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
    const setAsset = useAppStore((state) => state.setAsset);
    const virtuosoRef = useRef<VirtuosoGridHandle>(null);

    const { ref, focusKey, setFocus } = useFocusable({
        focusKey: rowId,
        trackChildren: true,
    });

    const selectedAssetParam = useMemo(() => {
        return params['selectedAssetId'] || null;
    }, [params]);

    const request = async ({
        query,
        mediaType,
        page,
    }: Parameters<typeof searchPicture>[0]) => {
        const { data } = await searchPicture({ query, mediaType, page });

        return data;
    };

    const { data, isFetching } = useQuery({
        queryKey: SEARCH_PICTURE({
            query: searchQuery,
            mediaType: searchFilter,
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
        (elemRef: HTMLElement, asset: SelectElement) => {
            scrollTo({ elemRef, block: 'center' });
            setAsset(asset);
        },
        [setAsset],
    );

    const renderItemContent = useCallback(
        (index: number, data: AssetType) => {
            return (
                <ItemContent
                    onFocus={handleAssetFocus}
                    {...{ rowId, index, data }}
                />
            );
        },
        [handleAssetFocus, rowId],
    );

    useEffect(() => {
        if (data) {
            setDataState(data);
        }
    }, [data, setDataState]);

    useEffect(() => {
        if (!searchData.length) {
            setAsset(null);
        }
    }, [searchData, setAsset, setFocus]);

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
        searchData,
        assetSize,
        isLoading: isFetching,
        requestMore,
        renderItemContent,
    };
};
