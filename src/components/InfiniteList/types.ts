import { CSSProperties, MutableRefObject, JSX } from 'react';
import { ListProps } from 'react-window';

export type ListItemOptions<T> = {
    rowId: string;
    rowItemId: string;
    itemData: T;
    itemStyle?: CSSProperties;
};

export type DefineRowItemIdOptions<T> = {
    rowId: string;
    itemData: T;
};

export type ListItem<T> = (options: ListItemOptions<T>) => JSX.Element | null;
export type DefineRowItemId<T> = (options: DefineRowItemIdOptions<T>) => string;

export type InfiniteListProps<ItemType> = {
    itemCount: number;
    isItemLoaded: (index: number) => boolean;
    requestMore?: () => void;
    gap?: number;
    ratio?: number;
    visibleItemsCount?: number;
    rowId: string;
    dataState: ItemType[];
    itemRef: MutableRefObject<HTMLElement>;
    selectedItem?: string | null;
    layout: ListProps['layout'];
    renderItem: ListItem<ItemType>;
    defineRowItemId: DefineRowItemId<ItemType>;
};
