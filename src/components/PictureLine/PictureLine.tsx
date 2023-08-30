import React from 'react';
import { ContentRow } from '@/components';
import { usePictureLine } from './usePictureLine';
import { PictureLineProps } from './types';

export const PictureLine = <ItemType,>(props: PictureLineProps<ItemType>) => {
    const {
        rowTitle = '',
        selectedItem,
        onRowFocus = () => {},
        focusOnLoad,
        renderItem = () => null,
        defineRowItemId = () => '',
    } = props;
    const { isError, isLoading, rowId, results, requestMore } =
        usePictureLine(props);

    return (
        <ContentRow
            rowId={rowId}
            rowTitle={rowTitle}
            isError={isError}
            isLoading={isLoading}
            dataState={results ?? []}
            selectedItem={selectedItem}
            requestMore={requestMore}
            onRowFocus={onRowFocus}
            focusOnLoad={focusOnLoad}
            renderItem={renderItem}
            defineRowItemId={defineRowItemId}
        />
    );
};
