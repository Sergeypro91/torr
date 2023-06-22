import { useCallback, useEffect } from 'react';
import { useAppStore } from '@/stores';
import { deepLink } from '@/utils';

type UseTizenListenerOptions = { backPress?: () => void };

export const useTizenListener = (
    { backPress }: UseTizenListenerOptions = { backPress: () => {} },
) => {
    const setData = useAppStore((state) => state.setData); // TODO Replace by "setBackground

    const onKeyDown = useCallback(
        (event: KeyboardEventInit) => {
            if (event.code === 'Escape') {
                backPress && backPress();
            }
        },
        [backPress],
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
