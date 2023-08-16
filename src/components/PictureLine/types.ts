import { ApiResponse } from 'openapi-typescript-fetch';
import { FocusableComponentLayout } from '@noriginmedia/norigin-spatial-navigation';
import { Pagination } from '@/types';
import { InfiniteListProps } from '@/components';

export type PictureLineStore<S> = {
    dataState: null | Pagination<S>;

    setDataState: (trendMovies: Pagination<S>) => void;
    nulledDataState: () => void;
};

export type PictureLineProps<ItemType> = {
    rowTitle?: string;
    state: PictureLineStore<ItemType>;
    getTrends: (page?: number) => Promise<ApiResponse<Pagination<ItemType>>>;
    queryKey: (page?: number) => (string | number)[];
    onRowFocus?: (layout: FocusableComponentLayout, asset: ItemType) => void;
    onLoadFocus?: boolean;
} & Partial<InfiniteListProps<ItemType>>;
