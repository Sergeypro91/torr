import { AssetType, Pagination, SelectElement } from '@/types';
import { ApiResponse } from 'openapi-typescript-fetch';
import { FocusableComponentLayout } from '@noriginmedia/norigin-spatial-navigation';

export type PictureLineStore<S> = {
    dataState: null | Pagination<S>;

    setDataState: (trendMovies: Pagination<S>) => void;
    nulledDataState: () => void;
};

export type PictureLineProps = {
    state: PictureLineStore<AssetType>;
    getTrends: (page?: number) => Promise<ApiResponse<Pagination<AssetType>>>;
    queryKey: (page?: number) => (string | number)[];
    name?: string;
    selectedItem: null | string;
    onRowFocus?: (layout: FocusableComponentLayout, asset: AssetType) => void;
    onAssetFocus?: (layout: HTMLElement, asset: SelectElement) => void;
    onLoadFocus?: (id: string) => void;
};
