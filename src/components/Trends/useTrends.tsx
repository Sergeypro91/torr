import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { TrendsProps } from './types';

export const useTrends = ({
    state,
    getTrends,
    queryKey,
    focusOnLoad = () => {},
}: TrendsProps) => {
    const { trends, setTrends } = state;
    const [page, setPage] = useState(1);

    const sectionId = useMemo(
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
    });

    const onLoadedData = useCallback(
        (focusedAssetId: string) => {
            focusOnLoad(`${focusedAssetId}`);
        },
        [focusOnLoad],
    );

    useEffect(() => {
        if (data) {
            setTrends(data);
        }
    }, [data, setTrends]);

    return { isError, isLoading, sectionId, onLoadedData, ...trends };
};
