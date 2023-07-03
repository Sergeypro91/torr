import {
    FocusableComponentLayout,
    FocusDetails,
} from '@noriginmedia/norigin-spatial-navigation';
import { AssetType, SelectElement } from '@/types';
import { CSSProperties } from 'react';

export type AssetProps = {
    data: AssetType;
    focusId: string;
    style: CSSProperties;
    onAssetFocus: (
        layout: FocusableComponentLayout,
        props: SelectElement,
        details: FocusDetails,
    ) => void;
};
