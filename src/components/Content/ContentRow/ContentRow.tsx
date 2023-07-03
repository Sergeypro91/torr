import React, { useCallback } from 'react';
import { ListChildComponentProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useContentRow } from './useContentRow';
import { ContentRowProps } from './types';
import { Asset } from './Asset';
import {
    ContentRowAssets,
    ContentRowContainer,
    ContentRowTitle,
    ContentRowAssetList,
} from './styled';

export const ContentRow = (props: ContentRowProps) => {
    const {
        rowId,
        rowTitle,
        dataState,
        margin = 40,
        itemCount = 1000,
        requestMore,
        onAssetFocus,
    } = props;

    const {
        ref,
        focusKey,
        rowWidth,
        assetSize,
        defineStyle,
        FocusContext,
        hasFocusedChild,
        listRef,
        infiniteLoaderRef,
        handleListItemsRendered,
    } = useContentRow({ ...props, margin });

    const Row = useCallback(
        ({ index, style }: ListChildComponentProps) => {
            const currStyle = defineStyle(style);
            const currAsset = dataState[index];
            const currFocusId = `${rowId}|${dataState[index]?.tmdbId}|${dataState[index]?.mediaType}`;

            return (
                <Asset
                    style={currStyle}
                    onAssetFocus={onAssetFocus}
                    data={currAsset}
                    focusId={currFocusId}
                />
            );
        },
        [defineStyle, dataState, rowId, onAssetFocus],
    );

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentRowContainer ref={ref} focused={hasFocusedChild}>
                <ContentRowTitle indent={margin}>{rowTitle}</ContentRowTitle>

                <ContentRowAssets>
                    <InfiniteLoader
                        ref={infiniteLoaderRef}
                        isItemLoaded={(index) => index < dataState.length}
                        itemCount={itemCount}
                        loadMoreItems={requestMore}
                    >
                        {({ onItemsRendered, ref }) => {
                            return (
                                <ContentRowAssetList
                                    height={assetSize.height}
                                    width={rowWidth}
                                    itemCount={itemCount}
                                    itemSize={assetSize.width + margin}
                                    onItemsRendered={(event) => {
                                        onItemsRendered(event);
                                        handleListItemsRendered(event);
                                    }}
                                    layout="horizontal"
                                    ref={(list) => {
                                        listRef.current = list;
                                        ref(list);
                                    }}
                                >
                                    {Row}
                                </ContentRowAssetList>
                            );
                        }}
                    </InfiniteLoader>
                </ContentRowAssets>
            </ContentRowContainer>
        </FocusContext.Provider>
    );
};

ContentRow.displayName = 'ContentRow';
