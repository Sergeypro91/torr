import React, { useEffect, useMemo } from 'react';
import { PictureContainer } from './styled';
import { routes, useRouteStore } from '@/stores';
import { NavItem } from '@/components';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';

export const Picture = () => {
    const route = useRouteStore((store) => store.route);
    const getParams = useRouteStore((store) => store.getParams);
    const params = getParams();

    const pictureId = useMemo(() => params?.pictureId ?? '', [params]);
    const torrentsRoute = useMemo(() => {
        return { ...route, pathName: `${route.pathName}/${routes.torrents}` };
    }, [route]);
    const filesRoute = useMemo(() => {
        return { ...route, pathName: `${route.pathName}/${routes.files}` };
    }, [route]);

    const { ref, focusKey, focusSelf } = useFocusable({
        focusKey: 'PICTURE',
        trackChildren: true,
        isFocusBoundary: true,
    });

    useEffect(() => {
        focusSelf();
    }, [focusSelf]);

    return (
        <FocusContext.Provider value={focusKey}>
            <PictureContainer>
                <div>PICTURE - {pictureId}</div>

                <div ref={ref}>
                    <NavItem
                        route={torrentsRoute}
                        render={() => <h2>Torrents</h2>}
                    />
                    <NavItem route={filesRoute} render={() => <h2>Files</h2>} />
                </div>
            </PictureContainer>
        </FocusContext.Provider>
    );
};
