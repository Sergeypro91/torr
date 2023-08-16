import React from 'react';
import { AssetType, SelectElement } from '@/types';
import { Asset } from '@/components/Content/ContentRow/Asset';

export type ItemContentProps = {
    index: number;
    data: AssetType;
    rowId: string;
    onFocus?: (layout: HTMLElement, asset: SelectElement) => void;
};

export const ItemContent = ({
    data,
    rowId,
    onFocus = () => {},
}: ItemContentProps) => {
    return (
        <Asset
            itemData={data}
            rowId={rowId}
            rowItemId={`${rowId}|${data.tmdbId}|${data.mediaType}`}
            onAssetFocus={onFocus}
            vertical
        />
    );
};
