import React from 'react';
import { AssetType, SelectElement } from '@/types';
import { Asset } from '@/components/Content/ContentRow/Asset';
import { createAssetId } from '@/utils';

export type ItemContentProps = {
    index: number;
    data: AssetType;
    rowId: string;
    onFocus: (layout: HTMLElement, asset: SelectElement) => void;
};

export const ItemContent = ({ data, rowId, onFocus }: ItemContentProps) => {
    return (
        <Asset
            onAssetFocus={onFocus}
            data={data}
            focusId={createAssetId(rowId, data?.tmdbId, data?.mediaType)}
            vertical
        />
    );
};
