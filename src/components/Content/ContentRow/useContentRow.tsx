import React, { useCallback, useEffect, useRef } from 'react';
import { debounce } from 'lodash-es';
import {
    FocusContext,
    FocusableComponentLayout,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { AssetType, SelectElement } from '@/types';
import { ContentRowProps } from '@/components/Content/ContentRow/types';

export const useContentRow = ({
    sectionId,
    trends,
    onFocus,
    onSelect,
    onLoadedData,
}: ContentRowProps) => {
    const scrollingRef = useRef<null | HTMLDivElement>(null);
    const { ref, focusKey, hasFocusedChild } = useFocusable({
        onFocus,
        focusKey: sectionId,
        trackChildren: true,
    });

    const getFocusId = useCallback(
        (asset: AssetType) => {
            return `${sectionId}${asset.tmdbId}${asset.mediaType}`;
        },
        [sectionId],
    );

    const updateSelectElement = debounce((selectElement: SelectElement) => {
        onSelect(selectElement);
    }, 300);

    const onAssetFocus = useCallback(
        (
            layout: FocusableComponentLayout,
            props: SelectElement,
            event: FocusDetails,
        ) => {
            if (scrollingRef.current) {
                scrollingRef.current.scrollTo({
                    left: layout.x,
                    behavior: 'smooth',
                });
            }

            updateSelectElement(props);
        },
        [updateSelectElement],
    );

    useEffect(() => {
        if (trends.length) {
            onLoadedData(
                `${sectionId}${trends[0].tmdbId}${trends[0].mediaType}`,
            );
        }
    }, [trends, sectionId, onLoadedData]);

    return {
        FocusContext,
        ref,
        focusKey,
        hasFocusedChild,
        onAssetFocus,
        scrollingRef,
        getFocusId,
    };
};
