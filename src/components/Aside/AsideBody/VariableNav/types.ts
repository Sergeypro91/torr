import { FocusDetails } from '@noriginmedia/norigin-spatial-navigation';

export type VariableNavProps = {
    setFocus: (
        focusKey: string,
        focusDetails?: FocusDetails | undefined,
    ) => void;
};
