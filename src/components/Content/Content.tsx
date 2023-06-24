import React, { memo } from 'react';
import { WEEK_TRENDING_MOVIES } from '@/hooks';
import { Trends } from '@/components';
import { useContent } from './useContent';
import { ContentWrapper } from './styled';

export const Content = memo(() => {
    const {
        FocusContext,
        ref,
        focusKey,
        movieTrendsState,
        getWeeklyMovieTrends,
        handleFocus,
        handleFocusOnLoad,
        handleSelectAsset,
    } = useContent();

    return (
        <FocusContext.Provider value={focusKey}>
            <ContentWrapper ref={ref}>
                <Trends
                    name="trend movie"
                    state={movieTrendsState}
                    getTrends={getWeeklyMovieTrends}
                    queryKey={WEEK_TRENDING_MOVIES}
                    onFocus={handleFocus}
                    focusOnLoad={handleFocusOnLoad}
                    onSelect={handleSelectAsset}
                />
            </ContentWrapper>
        </FocusContext.Provider>
    );
});

Content.displayName = 'Content';
