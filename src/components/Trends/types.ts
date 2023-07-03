import { AssetType, Pagination, SelectElement } from '@/types';
import { ApiResponse } from 'openapi-typescript-fetch';
import {
    FocusableComponentLayout,
    FocusDetails,
} from '@noriginmedia/norigin-spatial-navigation';
import { UseTrendsStore } from '@/stores';

export type TrendsProps = {
    state: UseTrendsStore<AssetType>;
    getTrends: (page?: number) => Promise<ApiResponse<Pagination<AssetType>>>;
    queryKey: (page?: number) => (string | number)[];
    name?: string;
    selectedItem: null | string;
    onRowFocus?: (
        layout: FocusableComponentLayout,
        asset: AssetType,
        details: FocusDetails,
    ) => void;
    onAssetFocus?: (
        layout: FocusableComponentLayout,
        asset: SelectElement,
        details: FocusDetails,
    ) => void;
    onLoadFocus?: (id: string) => void;
};
