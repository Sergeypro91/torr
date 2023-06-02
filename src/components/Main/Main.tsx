import React, { useCallback } from 'react';
import { routes, useRouteStore } from '@/store';
import {
    Downloads,
    Files,
    Home,
    Info,
    Person,
    Picture,
    Search,
    Settings,
    Torrents,
} from '@/screens';
import { MainContainer } from './styled';

export const Main = () => {
    const { pathName } = useRouteStore((state) => state.route);

    const renderMainContent = useCallback(() => {
        switch (pathName) {
            case routes.home:
                return <Home />;
            case routes.search:
                return <Search />;
            case routes.downloads:
                return <Downloads />;
            case routes.picture:
                return <Picture />;
            case routes.person:
                return <Person />;
            case `${routes.picture}/${routes.torrents}`:
                return <Torrents />;
            case `${routes.picture}/${routes.files}`:
                return <Files />;
            case routes.settings:
                return <Settings />;
            case routes.info:
                return <Info />;
            default:
                break;
        }
    }, [pathName]);

    return <MainContainer>{renderMainContent()}</MainContainer>;
};
