import React from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { useSearchResult } from './useSearchResult';
import { ItemContent } from './ItemContent';
import { SearchResultProps, HeaderContainerOptions } from './types';
import {
    SearchResultContainer,
    ItemContainer,
    ListContainer,
    HeaderContainer,
} from './styled';

export const SearchResult = (props: SearchResultProps) => {
    const {
        FocusContext,
        ref,
        virtuosoRef,
        focusKey,
        dataState,
        searchData,
        rowId,
        handleAssetFocus,
        isLoading,
        requestMore,
        assetSize,
    } = useSearchResult(props);

    const headerContainer = ({
        isEmpty,
        isLoading,
        isNotFound,
    }: HeaderContainerOptions) => {
        if (isLoading) {
            return <HeaderContainer>LOADING...</HeaderContainer>;
        }
        if (isNotFound) {
            return <HeaderContainer>NOT FOUND</HeaderContainer>;
        }
        if (isEmpty) {
            return <HeaderContainer>EMPTY</HeaderContainer>;
        }

        return null;
    };

    return (
        <FocusContext.Provider value={focusKey}>
            <SearchResultContainer ref={ref} {...assetSize}>
                <VirtuosoGrid
                    ref={virtuosoRef}
                    style={{ height: '100%' }}
                    data={searchData}
                    endReached={requestMore}
                    overscan={{
                        main: assetSize?.height ?? 300 * 2,
                        reverse: assetSize?.height ?? 300 * 2,
                    }}
                    components={{
                        Item: ItemContainer,
                        List: ListContainer,
                        Header: () =>
                            headerContainer({
                                isLoading,
                                isNotFound: !searchData.length,
                                isEmpty: !dataState,
                            }),
                    }}
                    itemContent={(index, data) => (
                        <ItemContent
                            onFocus={handleAssetFocus}
                            {...{ rowId, index, data }}
                        />
                    )}
                />
            </SearchResultContainer>
        </FocusContext.Provider>
    );
};
