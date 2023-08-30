import { FocusableComponentLayout } from '@noriginmedia/norigin-spatial-navigation';
import { InfiniteListProps } from '@/components';

export type ContentRowProps<ItemType> = {
    rowTitle: string;
    isError?: boolean;
    isLoading?: boolean;
    skeletonCount?: number;
    focusOnLoad?: boolean;
    onRowFocus?: (layout: FocusableComponentLayout, asset: ItemType) => void;
} & Partial<
    Omit<
        InfiniteListProps<ItemType>,
        'dataState' | 'rowId' | 'renderItem' | 'defineRowItemId'
    >
> &
    Pick<
        InfiniteListProps<ItemType>,
        'dataState' | 'rowId' | 'renderItem' | 'defineRowItemId'
    >;
