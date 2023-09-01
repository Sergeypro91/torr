import React from 'react';
import { InfiniteList } from '@/components';
import { useContentRow } from './useContentRow';
import { ContentRowProps } from './types';
import {
    ContentRowAssets,
    ContentRowContainer,
    ContentRowTitle,
} from './styled';

export const ContentRow = <ItemType,>(props: ContentRowProps<ItemType>) => {
    const {
        rowId,
        rowTitle,
        dataState,
        gap = 40,
        ratio = 9 / 16,
        itemCount = 1000,
        requestMore = () => {},
        renderItem,
        defineRowItemId,
        visibleItemsCount,
    } = props;

    const { ref, focusKey, FocusContext, hasFocusedChild } =
        useContentRow(props);

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentRowContainer ref={ref} focused={hasFocusedChild}>
                <ContentRowTitle indent={gap}>{rowTitle}</ContentRowTitle>

                <ContentRowAssets>
                    <InfiniteList
                        itemRef={ref}
                        rowId={rowId}
                        gap={gap}
                        ratio={ratio}
                        visibleItemsCount={visibleItemsCount}
                        itemCount={itemCount}
                        dataState={dataState}
                        isItemLoaded={(index) => index < dataState.length}
                        requestMore={requestMore}
                        selectedItem={props.selectedItem}
                        layout="horizontal"
                        renderItem={renderItem}
                        defineRowItemId={defineRowItemId}
                    />
                </ContentRowAssets>
            </ContentRowContainer>
        </FocusContext.Provider>
    );
};
