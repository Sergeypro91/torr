import React from 'react';
import { ContentRow } from '@/components';
import { TrendsContainer } from './styled';
import { useTrends } from '@/components/Trends/useTrends';
import { TrendsProps } from './types';

export const Trends = ({
    name = '',
    onFocus = () => {},
    onSelect = () => {},
    ...restProps
}: TrendsProps) => {
    const { isError, isLoading, sectionId, results, onLoadedData } =
        useTrends(restProps);

    return (
        <TrendsContainer>
            <ContentRow
                sectionId={sectionId}
                sectionName={name}
                isError={isError}
                isLoading={isLoading}
                trends={results || []}
                onFocus={onFocus}
                onSelect={onSelect}
                onLoadedData={onLoadedData}
            />
        </TrendsContainer>
    );
};
