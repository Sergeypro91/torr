import React, { useEffect } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { SearchHeader, SearchInfo, SearchResult } from '@/components';
import { SearchContainer } from './styled';

export const Search = () => {
    const { ref, focusKey, focusSelf } = useFocusable({
        focusKey: 'SEARCH',
        trackChildren: true,
    });

    useEffect(() => {
        focusSelf();
    }, [focusSelf]);

    return (
        <FocusContext.Provider value={focusKey}>
            <SearchContainer ref={ref}>
                <SearchHeader />
                <SearchInfo />
                <SearchResult />
            </SearchContainer>
        </FocusContext.Provider>
    );
};
