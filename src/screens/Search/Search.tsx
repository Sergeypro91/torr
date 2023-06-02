import React, { useCallback, useEffect, useMemo } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { Input } from '@/components';
import { SearchContainer } from './styled';
import { useRouteStore } from '@/store';

export const Search = () => {
    const setParams = useRouteStore((state) => state.setParams);
    const getParams = useRouteStore((state) => state.getParams);
    const params = getParams();

    const initialSearchValue = useMemo(() => {
        return params?.search ?? '';
    }, [params]);

    const { ref, focusKey, focusSelf } = useFocusable({
        focusKey: 'SEARCH',
        trackChildren: true,
    });

    useEffect(() => {
        focusSelf();
    }, [focusSelf]);

    const onPress = (inputRef: null | HTMLInputElement) => {
        if (inputRef) {
            inputRef.focus();
        }
    };

    const onInput = useCallback(
        (value: string) => {
            setParams({ search: value });
        },
        [setParams],
    );

    return (
        <FocusContext.Provider value={focusKey}>
            <SearchContainer ref={ref}>
                <Input
                    defaultValue={initialSearchValue}
                    placeholder="Search Movie, Tv or Person"
                    onPress={onPress}
                    onInput={onInput}
                />
            </SearchContainer>
        </FocusContext.Provider>
    );
};
