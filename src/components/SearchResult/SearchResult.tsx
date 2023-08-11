import React from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { useSearchResult } from './useSearchResult';
import { HeaderContainer } from './HeaderContainer';
import { SearchResultProps } from './types';
import { SearchResultContainer, ItemContainer, ListContainer } from './styled';

export const SearchResult = (props: SearchResultProps) => {
    const {
        FocusContext,
        ref,
        virtuosoRef,
        focusKey,
        searchData,
        assetSize,
        isLoading,
        requestMore,
        renderItemContent,
    } = useSearchResult(props);

    return (
        <FocusContext.Provider value={focusKey}>
            <SearchResultContainer ref={ref} {...assetSize}>
                <VirtuosoGrid
                    ref={virtuosoRef}
                    style={{ height: '100%' }}
                    data={searchData}
                    endReached={requestMore}
                    overscan={assetSize?.height}
                    components={{
                        Item: ItemContainer,
                        List: ListContainer,
                        Header: HeaderContainer(isLoading),
                    }}
                    itemContent={renderItemContent}
                />
            </SearchResultContainer>
        </FocusContext.Provider>
    );
};
