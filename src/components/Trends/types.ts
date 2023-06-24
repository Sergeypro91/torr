import { AssetType, Pagination, SelectElement } from '@/types';
import { UseTrendsStore } from '@/stores';
import { ApiResponse } from 'openapi-typescript-fetch';
import {
    FocusableComponentLayout,
    FocusDetails,
} from '@noriginmedia/norigin-spatial-navigation';

export type TrendsProps = {
    state: UseTrendsStore<AssetType>;
    getTrends: (page?: number) => Promise<ApiResponse<Pagination<AssetType>>>;
    queryKey: (page?: number) => (string | number)[];
    name?: string;
    onFocus?: (
        layout: FocusableComponentLayout,
        props: AssetType,
        event: FocusDetails,
    ) => void;
    focusOnLoad?: (id: string) => void;
    onSelect?: (asset: SelectElement) => void;
};
