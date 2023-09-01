import React, { useCallback } from 'react';
import { DefineRowItemIdOptions, ListItemOptions } from '@/components';
import { ParticipantPerson } from '@/types';
import { PersonItem } from './PersonItem';

export const usePersonsList = () => {
    const handleAssetFocus = useCallback(
        (
            layout: HTMLElement,
            item: ParticipantPerson & { focusId?: string },
        ) => {
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
        (props: ListItemOptions<ParticipantPerson>) => {
            return <PersonItem {...props} onAssetFocus={handleAssetFocus} />;
        },
        [handleAssetFocus],
    );

    const defineRowItemId = ({
        rowId,
        itemData,
    }: DefineRowItemIdOptions<ParticipantPerson>) => {
        return `${rowId}|${itemData.tmdbId}`;
    };

    return { renderItem, defineRowItemId };
};
