import { useCallback, useEffect } from 'react';

export const useKeyDownListener = (
    focused: boolean,
    selectOption: (direction: boolean) => void,
) => {
    const onKeyDown = useCallback(
        (event: KeyboardEventInit) => {
            if (event.code === 'ArrowUp') {
                selectOption(false);
            }
            if (event.code === 'ArrowDown') {
                selectOption(true);
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
