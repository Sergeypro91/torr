import React, {
    useRef,
    useCallback,
    useState,
    useMemo,
    CSSProperties,
    useEffect,
} from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList } from 'react-window';
import { getAssetSize } from '@/utils';
import { InfiniteListProps } from './types';
import { scrollToListItem } from './utils';

export const useInfiniteList = <ElemProps,>({
    gap = 0,
    ratio = 9 / 16,
    visibleItemsCount = 5.5,
    rowId,
    dataState,
    itemRef,
    selectedItem,
    defineRowItemId,
}: InfiniteListProps<ElemProps>) => {
    const [rowWidth, setRowWidth] = useState(0);
    const listRef = useRef<FixedSizeList | null>(null);
    const infiniteLoaderRef = useRef<InfiniteLoader | null>(null);
    const visibleItemsRef = useRef<{
        visibleStartIndex: number;
        visibleStopIndex: number;
    }>();

    const assetSize = useMemo(
        () =>
            getAssetSize({
                rowWidth,
                gap,
                visibleItemsCount,
                ratio,
            }),
        [gap, visibleItemsCount, ratio, rowWidth],
    );

    /**
     * @describe Mixes extra padding into the styles of nested list items
     * */
    const defineStyle = useCallback(
        (style: CSSProperties) => {
            return { ...style, ...assetSize, marginLeft: gap };
        },
        [assetSize, gap],
    );

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
        if (itemRef.current) {
            setRowWidth(itemRef.current.getBoundingClientRect().width);
        }
    }, [itemRef]);

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
            const listElem = listRef?.current;
            const itemElem = itemRef.current;
            const isSelectedItemFromRow =
                rowId.replace(/\s/g, '') === selectedItem.split('|')[0];

            if (isSelectedItemFromRow) {
                const selectedItemDataIndex = dataState.findIndex(
                    (itemData) =>
                        selectedItem === defineRowItemId({ rowId, itemData }),
                );
                const isItemOnScreen =
                    selectedItemDataIndex >=
                        visibleItemsRef.current?.visibleStartIndex &&
                    selectedItemDataIndex <=
                        visibleItemsRef.current?.visibleStopIndex;

                if (!isItemOnScreen && listElem && itemElem) {
                    scrollToListItem({
                        listElem,
                        itemElem,
                        itemIndex: selectedItemDataIndex,
                    });
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        gap,
        defineStyle,
        rowWidth,
        assetSize,
        listRef,
        infiniteLoaderRef,
        handleListItemsRendered,
    };
};
