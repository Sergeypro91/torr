import React, { memo } from 'react';
import { PictureLine } from '@/components';
import { useContent } from './useContent';
import { ContentWrapper } from './styled';
import { contentList } from './constnats';

export const Content = memo(() => {
    const {
        FocusContext,
        ref,
        focusKey,
        paramItem,
        handleRowFocus,
        handleOnLoadFocus,
        handleAssetFocus,
        getState,
    } = useContent();

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentWrapper ref={ref}>
                {contentList.map((content, id) => (
                    <PictureLine
                        key={content.queryKey()[0]}
                        name={content.name}
                        state={getState(`${content.queryKey()[0]}`)}
                        getTrends={content.getTrends}
                        queryKey={content.queryKey}
                        selectedItem={paramItem}
                        onRowFocus={handleRowFocus}
                        onAssetFocus={handleAssetFocus}
                        onLoadFocus={!id ? handleOnLoadFocus : undefined}
                    />
                ))}
            </ContentWrapper>
        </FocusContext.Provider>
    );
});

Content.displayName = 'Content';
