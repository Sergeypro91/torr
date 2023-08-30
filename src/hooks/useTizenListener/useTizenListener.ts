import { useCallback, useEffect } from 'react';
import { useAppStore, useBackgroundStore } from '@/stores';
import { deepLink } from '@/utils';

type UseTizenListenerOptions = { backPress?: () => void };

export const useTizenListener = (
    { backPress }: UseTizenListenerOptions = { backPress: () => {} },
) => {
    const setData = useAppStore((state) => state.setData); // TODO Replace by "setBackground
    const isPlaying = useBackgroundStore((state) => state.isPlaying);

    const onKeyDown = useCallback(
        (event: KeyboardEventInit) => {
            if (event.code === 'Escape' && !isPlaying) {
                backPress && backPress();
            }
        },
        [backPress, isPlaying],
    );

    const onDeepLink = useCallback(() => {
        deepLink(setData);
    }, [setData]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('appcontrol', onDeepLink);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('appcontrol', onDeepLink);
        };
    }, [onKeyDown, onDeepLink]);

    useEffect(() => {
        if ('tizen' in window) {
            deepLink(setData);
        }
    }, [setData]);
};
