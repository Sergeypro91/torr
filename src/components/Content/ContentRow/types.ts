import {
    FocusableComponentLayout,
    FocusDetails,
} from '@noriginmedia/norigin-spatial-navigation';
import { AssetType, SelectElement } from '@/types';

export type ContentRowProps = {
    rowId: string;
    rowTitle: string;
    isError: boolean;
    isLoading: boolean;
    dataState: AssetType[];
    selectedItem: null | string;
    margin?: number;
    itemCount?: number;
    skeletonCount?: number;
    requestMore: () => void;
    onRowFocus: (
        layout: FocusableComponentLayout,
        asset: AssetType,
        details: FocusDetails,
    ) => void;
    onAssetFocus: (
        layout: FocusableComponentLayout,
        asset: SelectElement,
        details: FocusDetails,
    ) => void;
    onLoadFocus: (focusedAssetId: string) => void;
};
