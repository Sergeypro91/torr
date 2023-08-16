import { AssetType, SelectElement } from '@/types';
import { ListItemOptions } from '@/components';

export type AssetProps = ListItemOptions<AssetType> & {
    vertical?: boolean;
    onAssetFocus?: (layout: HTMLElement, props: SelectElement) => void;
};
