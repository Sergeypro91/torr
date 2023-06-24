import { RefObject, useEffect, useState } from 'react';

export const useIntersection = (
    element: null | RefObject<HTMLSpanElement>,
    rootMargin?: string,
    trigger?: string,
) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const currRef = element?.current;
        console.log('TRIGGER 2', currRef);
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            },
            { rootMargin },
        );
        if (currRef) {
            currRef && observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, [element, rootMargin, trigger]);

    return isVisible;
};
