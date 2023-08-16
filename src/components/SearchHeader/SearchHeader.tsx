import React from 'react';
import { PageTitle, SearchHeaderContainer } from './styled';
import { SearchBar } from './SearchBar';
import { useRouteStore } from '@/stores';

export const SearchHeader = () => {
    const { pathName } = useRouteStore((state) => state.route);

    return (
        <SearchHeaderContainer>
            <PageTitle>{pathName}</PageTitle>
            <SearchBar />
        </SearchHeaderContainer>
    );
};
