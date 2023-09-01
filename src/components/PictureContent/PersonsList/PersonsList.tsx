import React from 'react';
import { ContentRow } from '@/components';
import { PersonsListProps } from './types';
import { usePersonsList } from './usePersonsList';

export const PersonsList = (props: PersonsListProps) => {
    const { rowId, rowTitle, dataState } = props;
    const { renderItem, defineRowItemId } = usePersonsList();

    return dataState.length ? (
        <ContentRow
            rowId={rowId}
            ratio={4 / 3}
            rowTitle={rowTitle}
            dataState={dataState}
            selectedItem={null}
            onRowFocus={(layout, asset) => {
                console.log('ROW FOCUS', { layout, asset });
            }}
            visibleItemsCount={6.5}
            itemCount={dataState.length}
            renderItem={renderItem}
            defineRowItemId={defineRowItemId}
        />
    ) : null;
};
