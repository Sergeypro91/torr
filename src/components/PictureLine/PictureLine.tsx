import React from 'react';
import { ContentRow } from '@/components';
import { PictureLineContainer } from './styled';
import { usePictureLine } from '@/components/PictureLine/usePictureLine';
import { PictureLineProps } from './types';

export const PictureLine = ({
    name = '',
    selectedItem,
    onRowFocus = () => {},
    onAssetFocus = () => {},
    onLoadFocus = () => {},
    ...restProps
}: PictureLineProps) => {
    const { isError, isLoading, rowId, results, requestMore } =
        usePictureLine(restProps);

    return (
        <PictureLineContainer>
            <ContentRow
                rowId={rowId}
                rowTitle={name}
                isError={isError}
                isLoading={isLoading}
                dataState={results || []}
                selectedItem={selectedItem}
                requestMore={requestMore}
                onRowFocus={onRowFocus}
                onAssetFocus={onAssetFocus}
                onLoadFocus={onLoadFocus}
            />
        </PictureLineContainer>
    );
};
