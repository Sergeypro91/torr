import React from 'react';
import { ContentRow } from '@/components';
import { TrendsContainer } from './styled';
import { useTrends } from '@/components/Trends/useTrends';
import { TrendsProps } from './types';

export const Trends = ({
    name = '',
    selectedItem,
    onRowFocus = () => {},
    onAssetFocus = () => {},
    onLoadFocus = () => {},
    ...restProps
}: TrendsProps) => {
    const { isError, isLoading, rowId, results, requestMore } =
        useTrends(restProps);

    return (
        <TrendsContainer>
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
        </TrendsContainer>
    );
};
