import React, { useCallback } from 'react';
import { DefineRowItemIdOptions, ListItemOptions } from '@/components';
import { Video } from '@/types';
import { TrailerItem } from './TrailerItem';

export const useTrailersList = () => {
    const handleAssetFocus = useCallback(
        (layout: HTMLElement, item: Video & { focusId?: string }) => {
            setTimeout(() => {
                layout?.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth',
                    inline: 'center',
                });
            });
        },
        [],
    );

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

    return { renderItem, defineRowItemId };
};
