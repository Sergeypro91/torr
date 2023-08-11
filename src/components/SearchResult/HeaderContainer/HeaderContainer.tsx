import React from 'react';
import { Container } from './styled';

import { useSearchStore } from '@/stores';
import { Empty, NotFound, Search } from '@/assets/images/svgr';

const Header = ({ isLoading }: { isLoading: boolean }) => {
    const dataState = useSearchStore((state) => state.dataState);

    if (isLoading) {
        return (
            <Container>
                <Search />
            </Container>
        );
    }

    if (!dataState) {
        return (
            <Container>
                <Empty />
            </Container>
        );
    }

    if (!dataState?.results.length) {
        return (
            <Container>
                <NotFound />
            </Container>
        );
    }

    return null;
};

export const HeaderContainer = (isLoading: boolean) =>
    function HeaderCurry() {
        return <Header isLoading={isLoading} />;
    };
