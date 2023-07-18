import { useCallback, useEffect } from 'react';

export const useKeyDownListener = (
    focused: boolean,
    selectOption: (direction: boolean) => void,
) => {
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (['ArrowUp', 'ArrowDown'].includes(event.code)) {
                event.stopPropagation();
            }

            switch (event.code) {
                case 'ArrowUp':
                    return selectOption(false);
                case 'ArrowDown':
                    return selectOption(true);
                default:
                    return;
            }
        },
        [selectOption],
    );

    useEffect(() => {
        if (focused) {
            document.addEventListener('keydown', onKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [focused, onKeyDown]);
};
