import React from 'react';
import { ContentRow } from '@/components';
import { TrailersListProps } from './types';
import { useTrailersList } from './useTrailersList';
import { TrailersListContainer } from './styled';

export const TrailersList = ({
    videos,
    rowId = 'trailer',
}: TrailersListProps) => {
    const { renderItem, defineRowItemId } = useTrailersList();

    return videos.length ? (
        <TrailersListContainer>
            <ContentRow
                rowId={rowId}
                rowTitle="Trialers"
                dataState={videos}
                selectedItem={null}
                onRowFocus={(layout, asset) => {
                    console.log('ROW FOCUS', { layout, asset });
                }}
                visibleItemsCount={3.5}
                itemCount={videos.length}
                renderItem={renderItem}
                defineRowItemId={defineRowItemId}
                focusOnLoad
            />
        </TrailersListContainer>
    ) : null;
};
