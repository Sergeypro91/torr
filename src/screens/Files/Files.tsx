import React, { useMemo } from 'react';
import { FilesContainer } from './styled';
import { useRouteStore } from '@/stores';

export const Files = () => {
    const getParams = useRouteStore((store) => store.getParams);
    const params = getParams();

    const pictureId = useMemo(() => params?.pictureId ?? '', [params]);

    return <FilesContainer>FILES - {pictureId}</FilesContainer>;
};
