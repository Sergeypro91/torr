import React, { useMemo } from 'react';
import { TorrentsContainer } from './styled';
import { useRouteStore } from '@/store';

export const Torrents = () => {
    const getParams = useRouteStore((store) => store.getParams);
    const params = getParams();

    const pictureId = useMemo(() => params?.pictureId ?? '', [params]);

    return <TorrentsContainer>TORRENTS - {pictureId}</TorrentsContainer>;
};
