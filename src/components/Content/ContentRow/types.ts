import {
    FocusableComponentLayout,
    FocusDetails,
} from '@noriginmedia/norigin-spatial-navigation';
import { AssetType, SelectElement } from '@/types';

export type ContentRowProps = {
    sectionId: string;
    sectionName: string;
    isError: boolean;
    isLoading: boolean;
    trends: AssetType[];
    skeletonCount?: number;
    requestMore: () => void;
    onFocus: (
        layout: FocusableComponentLayout,
        props: AssetType,
        event: FocusDetails,
    ) => void;
    onSelect: (asset: SelectElement) => void;
    onLoadedData: (focusedAssetId: string) => void;
};
