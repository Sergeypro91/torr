import React, {
    useRef,
    useState,
    useMemo,
    useEffect,
    CSSProperties,
    useCallback,
} from 'react';
import {
    FocusContext,
    useFocusable,
    setThrottle,
} from '@noriginmedia/norigin-spatial-navigation';
import { ContentRowProps } from '@/components/Content/ContentRow/types';
import { getAssetSize } from '@/utils';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

export const useContentRow = ({
    margin,
    rowId,
    dataState,
    selectedItem,
    onRowFocus,
    onLoadFocus,
}: ContentRowProps & { margin: number }) => {
    const [rowWidth, setRowWidth] = useState(0);
    const listRef = useRef<FixedSizeList | null>(null);
    const infiniteLoaderRef = useRef<InfiniteLoader | null>(null);
    const visibleItemsRef = useRef<{
        visibleStartIndex: number;
        visibleStopIndex: number;
    }>();

    const assetSize = useMemo(
        () => getAssetSize({ rowWidth, margin, counter: 5 }),
        [margin, rowWidth],
    );

    /**
     * @describe Mixes extra padding into the styles of nested list items
     * */
    const defineStyle = useCallback(
        (style: CSSProperties) => {
            return { ...style, ...assetSize, marginLeft: margin };
        },
        [assetSize, margin],
    );

    const { ref, focusKey, hasFocusedChild } = useFocusable({
        onFocus: onRowFocus,
        focusKey: rowId,
        trackChildren: true,
    });

    /**
     * @describe Define the indexes of the list items visible in the viewport (first and last)
     * */
    const handleListItemsRendered = (params: {
        visibleStartIndex: number;
        visibleStopIndex: number;
    }) => {
        const { visibleStartIndex, visibleStopIndex } = params;

        visibleItemsRef.current = { visibleStartIndex, visibleStopIndex };
    };

    /**
     * @describe Calculates the length of the list component to further calculate the size of nested elements
     * */
    useEffect(() => {
        console.log('REF', ref.current.getBoundingClientRect().width);
        if (ref.current) {
            setRowWidth(ref.current.getBoundingClientRect().width);
        }
    }, [ref]);

    /**
     * @describe Set focus to the first item in the list if no item is selected. Set by flag from parent component (only one per page)
     * */
    useEffect(() => {
        if (dataState.length) {
            onLoadFocus(
                `${rowId}|${dataState[0].tmdbId}|${dataState[0].mediaType}`,
            );
        }
    }, [onLoadFocus, rowId, dataState]);

    /**
     * @describe Focus throttling
     * */
    useEffect(() => {
        setThrottle({
            throttle: 400,
        });
    }, []);

    /**
     * @describe Effect for handling situations when the user returns from another page to a previously viewed element
     * */
    useEffect(() => {
        if (
            visibleItemsRef.current &&
            selectedItem &&
            dataState.length &&
            listRef.current
        ) {
            const [row, itemId, itemType] = selectedItem.split('|');
            const isSelectedItemFromRow = rowId.replace(/\s/g, '') === row;
            const scrollToRow = (element: Element) => {
                setTimeout(() => {
                    element.scrollIntoView({
                        block: 'start',
                        inline: 'start',
                    });
                }, 300);
            };

            if (isSelectedItemFromRow) {
                const selectedItemDataIndex = dataState.findIndex(
                    (item) =>
                        `${item.tmdbId}${item.mediaType}` ===
                        `${itemId}${itemType}`,
                );
                const isItemOnScreen =
                    selectedItemDataIndex >=
                        visibleItemsRef.current?.visibleStartIndex &&
                    selectedItemDataIndex <=
                        visibleItemsRef.current?.visibleStopIndex;

                if (!isItemOnScreen) {
                    setTimeout(() => {
                        scrollToRow(ref.current);
                        listRef?.current?.scrollToItem(
                            selectedItemDataIndex,
                            'center',
                        );
                    });
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        ref,
        focusKey,
        rowWidth,
        assetSize,
        FocusContext,
        hasFocusedChild,
        listRef,
        infiniteLoaderRef,
        defineStyle,
        handleListItemsRendered,
    };
};
