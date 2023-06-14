import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getTrends } from '@/api';
import { MediaType, Pagination, TimeWindow } from '@/types';
import { TrendsContainer } from './styled';

export type TrendsProps<T> = {
    trendsState: Pagination<T> | null;
    setTrendsState: (trendsState: Pagination<T>) => void;
    mediaType: MediaType;
    timeWindow: TimeWindow;
    queryKey: (page?: number) => (string | number)[];
};

export const Trends = <T,>({
    trendsState,
    setTrendsState,
    mediaType,
    timeWindow,
    queryKey,
}: TrendsProps<T>) => {
    const [page, setPage] = useState(1);

    const request = async (page?: number) => {
        const { data } = await getTrends({
            mediaType,
            timeWindow,
            page,
        });

        return data as Pagination<T>;
    };

    const { isLoading, isError, error, data, isFetching, isPreviousData } =
        useQuery({
            queryKey: queryKey(page),
            queryFn: () => request(page),
            keepPreviousData: true,
        });

    useEffect(() => {
        if (data) {
            console.log('DATA', data);
            setTrendsState(data);
        }
    }, [data, setTrendsState]);

    return <TrendsContainer>TEST</TrendsContainer>;
};
