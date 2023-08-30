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
        renderItem,
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
    const defineRowItemId = useRef(props.defineRowItemId);

    const Item = useCallback(
        ({ index, style }: ListChildComponentProps) => {
            const itemStyle = defineStyle(style);
            const itemData = dataState[index];
            const rowItemId = defineRowItemId.current({ rowId, itemData });

            return renderItem({
                itemStyle,
                itemData,
                rowId,
                rowItemId,
            });
        },
        [defineStyle, dataState, rowId, renderItem],
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
                gap={gap}
                layout={layout}
                itemCount={itemCount}
                itemSize={assetSize.width + gap}
                onItemsRendered={(event) => {
                    onItemsRendered(event);
                    handleListItemsRendered(event);
                }}
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
