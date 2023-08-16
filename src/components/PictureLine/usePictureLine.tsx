import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PictureLineProps } from './types';
import { debounce } from 'lodash-es';

export const usePictureLine = <ItemType,>({
    state,
    getTrends,
    queryKey,
}: PictureLineProps<ItemType>) => {
    const { dataState, setDataState } = state;
    const [page, setPage] = useState(dataState?.page ?? 1);

    const rowId = useMemo(
        () => `${queryKey()[0]}`.replace(/\s/g, ''),
        [queryKey],
    );

    const request = async (page?: number) => {
        const { data } = await getTrends(page);

        return data;
    };

    const { isLoading, isError, data } = useQuery({
        queryKey: queryKey(page),
        queryFn: () => request(page),
        keepPreviousData: true,
        enabled: !!page,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const requestMore = useCallback(
        debounce(() => {
            const dataPage = data?.page;
            if (!isLoading) {
                setPage((prevState) =>
                    dataPage === prevState ? prevState + 1 : prevState,
                );
            }
        }, 300),
        [isLoading, data],
    );

    useEffect(() => {
        if (data) {
            setDataState(data);
        }
    }, [data, setDataState]);

    return {
        isError,
        isLoading,
        rowId,
        requestMore,
        ...dataState,
    };
};
