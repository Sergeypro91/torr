import React, { useEffect, useMemo } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { routes, useRouteStore, useVariableNavStore } from '@/stores';
import { useQuery } from '@tanstack/react-query';
import { GET_PICTURE_BY_ID } from '@/hooks';
import { getPictureById } from '@/api';
import { MediaType } from '@/types';

export const usePicture = () => {
    const route = useRouteStore((store) => store.route);
    const getParams = useRouteStore((store) => store.getParams);
    const setVariableNav = useVariableNavStore((state) => state.setVariableNav);
    const params = getParams();

    const pictureId = useMemo(() => params?.pictureId ?? '', [params]);
    const mediaType = useMemo(() => route.pathName as MediaType, [route]);

    const { ref, focusKey, focusSelf } = useFocusable({
        focusKey: 'PICTURE',
        trackChildren: true,
    });

    const request = async ({
        tmdbId,
        mediaType,
    }: Parameters<typeof getPictureById>[0]) => {
        const { data } = await getPictureById({ tmdbId, mediaType });

        return data;
    };

    const { data, isFetching } = useQuery({
        queryKey: GET_PICTURE_BY_ID({ tmdbId: pictureId, mediaType }),
        queryFn: () => request({ tmdbId: pictureId, mediaType }),
        keepPreviousData: true,
        enabled: !!pictureId && !!mediaType,
    });

    const { title, budget, tagline, credits, videos, production } = useMemo(
        () =>
            data?.pictureData || {
                title: null,
                budget: null,
                tagline: null,
                credits: null,
                videos: null,
                production: null,
            },
        [data],
    );

    useEffect(() => {
        const variableNav = [
            {
                title: 'Torrents',
                link: `${route.pathName}/${routes.torrents}?pictureId=${pictureId}`,
            },
            {
                title: 'Files',
                link: `${route.pathName}/${routes.files}?pictureId=${pictureId}`,
            },
        ];

        setVariableNav(variableNav);
        focusSelf();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        ref,
        focusKey,
        FocusContext,
        title,
        credits,
        videos,
        budget,
        tagline,
        production,
    };
};
