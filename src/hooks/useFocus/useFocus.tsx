import { RefObject, useEffect } from 'react';

type UseFocus = {
    ref: RefObject<HTMLElement>;
    focused: boolean;
};

export const useFocus = ({ ref, focused }: UseFocus) => {
    useEffect(() => {
        if (ref.current) {
            ref.current.setAttribute('tabIndex', '1');

            if (focused) {
                ref.current.focus();
            } else {
                ref.current.blur();
            }
        }
    }, [focused, ref]);
};
