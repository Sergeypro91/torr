import React, { useCallback, useMemo } from 'react';
import { Divider, SearchBarContainer } from './styled';
import { Input, Selector } from '@/components';
import { useRouteStore, useSearchStore } from '@/stores';
import { Loupe } from '@/assets/images/svgr';
import { Button } from '@/components/Button';

const selectorOptions = ['movie', 'tv', 'person'];

export const SearchBar = () => {
    const setParams = useRouteStore((state) => state.setParams);
    const getParams = useRouteStore((state) => state.getParams);
    const searchFilter = useSearchStore((state) => state.searchFilter);
    const setSearchFilter = useSearchStore((state) => state.setSearchFilter);
    const params = getParams();

    const initialSearchValue = useMemo(() => {
        return params?.search ?? '';
    }, [params]);

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

    const handleSubmit = () => {
        console.log('FORM SUBMIT');
    };

    return (
        <SearchBarContainer>
            <Input
                defaultValue={initialSearchValue}
                placeholder="Search Movie, Tv or Person"
                onPress={onPress}
                onInput={onInput}
            />
            <Divider />
            <Selector
                currentOption={searchFilter}
                setOption={setSearchFilter}
                options={selectorOptions}
            />
            <Divider />
            <Button icon={Loupe} size="big" action={handleSubmit} />
        </SearchBarContainer>
    );
};
