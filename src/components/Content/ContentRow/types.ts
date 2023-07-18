import { FocusableComponentLayout } from '@noriginmedia/norigin-spatial-navigation';
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
    onRowFocus: (layout: FocusableComponentLayout, asset: AssetType) => void;
    onAssetFocus: (layout: HTMLElement, asset: SelectElement) => void;
    onLoadFocus: (focusedAssetId: string) => void;
};
