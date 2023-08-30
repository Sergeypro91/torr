import React, { useEffect, useRef } from 'react';
import {
    FocusContext,
    useFocusable,
    setThrottle,
} from '@noriginmedia/norigin-spatial-navigation';
import { ContentRowProps } from './types';

export const useContentRow = <ElemProps,>(
    props: ContentRowProps<ElemProps>,
) => {
    const {
        rowId,
        dataState,
        onRowFocus = () => {},
        focusOnLoad = false,
        selectedItem,
    } = props;
    const { ref, focusKey, hasFocusedChild, setFocus } = useFocusable({
        onFocus: onRowFocus,
        focusKey: rowId,
        trackChildren: true,
    });
    const defineRowItemId = useRef(props.defineRowItemId);

    /**
     * @describe Set focus to the first item in the list if no item is selected. Set by flag from parent component (only one per page)
     * */
    useEffect(() => {
        if (!selectedItem && dataState.length && focusOnLoad) {
            setFocus(
                defineRowItemId.current({ rowId, itemData: dataState[0] }),
            );
        }
    }, [focusOnLoad, rowId, dataState, selectedItem, setFocus]);

    /**
     * @describe Focus throttling
     * */
    useEffect(() => {
        setThrottle({
            throttle: 400,
        });
    }, []);

    return {
        ref,
        focusKey,
        FocusContext,
        hasFocusedChild,
    };
};
