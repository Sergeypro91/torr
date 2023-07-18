import React from 'react';
import { Input, Selector } from '@/components';
import { Loupe } from '@/assets/images/svgr';
import { Button } from '@/components/Button';
import { MediaType } from '@/types';
import { useSearchBar } from './useSearchBar';
import { Divider, SearchBarContainer } from './styled';

export const SearchBar = () => {
    const {
        searchQueryParam,
        searchFilterParam,
        handlePress,
        handleInput,
        handleSelector,
        handleSubmit,
    } = useSearchBar();

    return (
        <SearchBarContainer>
            <Input
                defaultValue={searchQueryParam}
                placeholder="Enter Movie, Tv or Person"
                onPress={handlePress}
                onInput={handleInput}
            />
            <Divider />
            <Selector
                currentOption={searchFilterParam}
                setOption={handleSelector}
                options={Object.values(MediaType)}
            />
            <Divider />
            <Button icon={Loupe} size="big" action={handleSubmit} />
        </SearchBarContainer>
    );
};
