import React, { useCallback, useRef } from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import {
    ListChildComponentProps,
    ListOnItemsRenderedProps,
} from 'react-window';
import { useInfiniteList } from './useInfiniteList';
import { InfiniteListProps } from './types';
import { ListContainer } from './styled';

export const InfiniteList = <ItemType,>(props: InfiniteListProps<ItemType>) => {
    const {
        itemCount,
        isItemLoaded,
        requestMore = () => {},
        rowId,
        dataState,
        layout,
    } = props;
    const {
        gap,
        defineStyle,
        rowWidth,
        assetSize,
        listRef,
        infiniteLoaderRef,
        handleListItemsRendered,
    } = useInfiniteList(props);
    const renderItem = useRef(props.renderItem);
    const defineRowItemId = useRef(props.defineRowItemId);

    const Item = useCallback(
        ({ index, style }: ListChildComponentProps) => {
            const itemStyle = defineStyle(style);
            const itemData = dataState[index];
            const rowItemId = defineRowItemId.current({ rowId, itemData });

            return renderItem.current({
                itemStyle,
                itemData,
                rowId,
                rowItemId,
            });
        },
        [defineStyle, dataState, rowId],
    );

    const List = ({
        ref,
        onItemsRendered,
    }: {
        ref: (ref: any) => void;
        onItemsRendered: (props: ListOnItemsRenderedProps) => any;
    }) => {
        return (
            <ListContainer
                width={rowWidth}
                height={assetSize.height}
                itemCount={itemCount}
                itemSize={assetSize.width + gap}
                onItemsRendered={(event) => {
                    onItemsRendered(event);
                    handleListItemsRendered(event);
                }}
                layout={layout}
                ref={(list) => {
                    listRef.current = list;
                    ref(list);
                }}
            >
                {Item}
            </ListContainer>
        );
    };

    return (
        <InfiniteLoader
            ref={infiniteLoaderRef}
            itemCount={itemCount}
            isItemLoaded={isItemLoaded}
            loadMoreItems={requestMore}
        >
            {List}
        </InfiniteLoader>
    );
};
