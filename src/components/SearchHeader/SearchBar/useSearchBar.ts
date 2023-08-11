import { useMemo } from 'react';
import { useRouteStore, useSearchStore } from '@/stores';
import { MediaType } from '@/types';

export const useSearchBar = () => {
    const params = useRouteStore((state) => state.getParams());
    const setParams = useRouteStore((state) => state.setParams);
    const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
    const setSearchFilter = useSearchStore((state) => state.setSearchFilter);

    const searchQueryParam = useMemo(() => {
        return params?.search ?? '';
    }, [params]);

    const searchFilterParam = useMemo(() => {
        return (params?.filter as MediaType) ?? MediaType.ALL;
    }, [params]);

    const handlePress = (inputRef: null | HTMLInputElement) => {
        if (inputRef) {
            inputRef.focus();
        }
    };

    const handleInput = (value: string) => {
        setParams({ search: value });
    };

    const handleSelector = (value: string) => {
        setParams({ filter: value });
    };

    const handleSubmit = () => {
        setSearchQuery(searchQueryParam);
        setSearchFilter(searchFilterParam);
    };

    return {
        searchQueryParam,
        searchFilterParam,
        handlePress,
        handleInput,
        handleSelector,
        handleSubmit,
    };
};
