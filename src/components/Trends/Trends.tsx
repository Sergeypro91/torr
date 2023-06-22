import React, { useEffect, useMemo, useState } from 'react';
import { ApiResponse } from 'openapi-typescript-fetch';
import { useQuery } from 'react-query';
import { UseTrendsStore } from '@/stores';
import { AssetType, Pagination, SelectElement } from '@/types';
import {
    FocusableComponentLayout,
    FocusDetails,
} from '@noriginmedia/norigin-spatial-navigation';
import { ContentRow } from '@/components';
import { TrendsContainer } from './styled';

export type TrendsProps = {
    state: UseTrendsStore<AssetType>;
    getTrends: (page?: number) => Promise<ApiResponse<Pagination<AssetType>>>;
    queryKey: (page?: number) => (string | number)[];
    name?: string;
    onFocus?: (
        layout: FocusableComponentLayout,
        props: SelectElement,
        event: FocusDetails,
    ) => void;
    focusOnLoad?: (id: string) => void;
    onSelect?: (asset: SelectElement) => void;
};

export const Trends = ({
    state,
    getTrends,
    queryKey,
    name = '',
    onFocus = () => {},
    focusOnLoad = () => {},
    onSelect = () => {},
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

    useEffect(() => {
        if (data) {
            focusOnLoad(sectionId);
            setTrends(data);
        }
    }, [data, focusOnLoad, sectionId, setTrends]);

    return (
        <TrendsContainer>
            <>
                {isError ? <div>ERROR HAPPEN</div> : null}

                {trends?.results.length ? (
                    <ContentRow
                        sectionId={sectionId}
                        sectionName={name}
                        trends={trends.results}
                        onFocus={onFocus}
                        onSelect={onSelect}
                    />
                ) : null}

                {isLoading ? <div>LOADING...</div> : null}
            </>
        </TrendsContainer>
    );
};
