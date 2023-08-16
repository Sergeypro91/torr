import React, { useCallback } from 'react';
import { routes, useRouteStore } from '@/stores';
import {
    Downloads,
    Files,
    Home,
    Info,
    Person,
    Picture,
    Profile,
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
            case routes.movie:
            case routes.tv:
                return <Picture />;
            case routes.person:
                return <Person />;
            case `${routes.movie}/${routes.torrents}`:
            case `${routes.tv}/${routes.torrents}`:
                return <Torrents />;
            case `${routes.movie}/${routes.files}`:
            case `${routes.tv}/${routes.files}`:
                return <Files />;
            case routes.profile:
                return <Profile />;
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
