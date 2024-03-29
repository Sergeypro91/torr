import React from 'react';
import { ContentRow } from '@/components';
import { TrailersListProps } from './types';
import { useTrailersList } from './useTrailersList';

export const TrailersList = (props: TrailersListProps) => {
    const { rowId, rowTitle, dataState } = props;
    const { renderItem, defineRowItemId } = useTrailersList();

    return dataState.length ? (
        <ContentRow
            rowId={rowId}
            rowTitle={rowTitle}
            dataState={dataState}
            selectedItem={null}
            onRowFocus={(layout, asset) => {
                console.log('ROW FOCUS', { layout, asset });
            }}
            visibleItemsCount={3.5}
            itemCount={dataState.length}
            renderItem={renderItem}
            defineRowItemId={defineRowItemId}
            focusOnLoad
        />
    ) : null;
};
