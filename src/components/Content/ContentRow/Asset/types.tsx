import { AssetType, SelectElement } from '@/types';
import { CSSProperties } from 'react';

export type AssetProps = {
    data: AssetType;
    focusId: string;
    style?: CSSProperties;
    onAssetFocus: (layout: HTMLElement, props: SelectElement) => void;
    vertical?: boolean;
};
