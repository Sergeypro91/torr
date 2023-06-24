import {
    FocusableComponentLayout,
    FocusDetails,
} from '@noriginmedia/norigin-spatial-navigation';
import { SelectElement } from '@/types';

export type AssetProps = SelectElement & {
    onFocus: (
        layout: FocusableComponentLayout,
        props: SelectElement,
        details: FocusDetails,
    ) => void;
};
