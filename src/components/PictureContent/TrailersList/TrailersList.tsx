import React, { useCallback } from 'react';
import {
    ContentRow,
    DefineRowItemIdOptions,
    ListItemOptions,
} from '@/components';
import { Video } from '@/types';
import { TrailersListContainer } from './styled';
import { TrailerItem } from '@/components/PictureContent/TrailersList/TrailerItem';

export type TrailersListProps = {
    videos: Video[];
    rowId?: string;
};

export const TrailersList = ({
    videos,
    rowId = 'trailer',
}: TrailersListProps) => {
    const handleAssetFocus = useCallback((layout: HTMLElement, item: Video) => {
        setTimeout(() => {
            layout?.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth',
                inline: 'center',
            });
        });
    }, []);

    const renderItem = useCallback(
        (props: ListItemOptions<Video>) => {
            return <TrailerItem {...props} onAssetFocus={handleAssetFocus} />;
        },
        [handleAssetFocus],
    );

    const defineRowItemId = ({
        rowId,
        itemData,
    }: DefineRowItemIdOptions<Video>) => {
        return `${rowId}|${itemData?.key}`;
    };

    return (
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
                onLoadFocus
            />
        </TrailersListContainer>
    );
};
