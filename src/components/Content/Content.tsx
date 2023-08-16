import React, { memo, useCallback } from 'react';
import {
    DefineRowItemIdOptions,
    ListItemOptions,
    PictureLine,
} from '@/components';
import { AssetType } from '@/types';
import { Asset } from './ContentRow/Asset';
import { useContent } from './useContent';
import { contentList } from './constnats';
import { ContentWrapper } from './styled';

export const Content = memo(() => {
    const {
        FocusContext,
        ref,
        focusKey,
        paramItem,
        handleRowFocus,
        handleAssetFocus,
        getState,
    } = useContent();

    const renderItem = useCallback(
        (props: ListItemOptions<AssetType>) => {
            return <Asset {...props} onAssetFocus={handleAssetFocus} />;
        },
        [handleAssetFocus],
    );

    const defineRowItemId = ({
        rowId,
        itemData,
    }: DefineRowItemIdOptions<AssetType>) => {
        return `${rowId}|${itemData?.tmdbId}|${itemData?.mediaType}`;
    };

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentWrapper ref={ref}>
                {contentList.map((content, id) => (
                    <PictureLine
                        key={content.queryKey()[0]}
                        rowTitle={content.name}
                        state={getState(`${content.queryKey()[0]}`)}
                        getTrends={content.getTrends}
                        queryKey={content.queryKey}
                        selectedItem={paramItem}
                        onRowFocus={handleRowFocus}
                        onLoadFocus={!Boolean(id)}
                        renderItem={renderItem}
                        defineRowItemId={defineRowItemId}
                    />
                ))}
            </ContentWrapper>
        </FocusContext.Provider>
    );
});

Content.displayName = 'Content';
