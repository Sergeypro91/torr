import { useCallback, useEffect, useState } from 'react';

type useIntersectionProps = {
    root?: null | HTMLDivElement;
    rootMargin?: string;
    threshold?: number;
    target?: null | HTMLDivElement;
    action?: () => void;
};

export const useIntersection = ({
    root = null,
    rootMargin = '',
    threshold = 0,
    target = null,
    action = () => {},
}: useIntersectionProps) => {
    const [observer, setObserver] = useState<IntersectionObserver>();

    const callback = useCallback(
        ([entry]: IntersectionObserverEntry[]) => {
            if (entry.isIntersecting) {
                action();
            }
        },
        [action],
    );

    useEffect(() => {
        setObserver(
            new IntersectionObserver(callback, { root, rootMargin, threshold }),
        );
    }, [root, rootMargin, target, threshold, callback]);

    return { observer };
};
