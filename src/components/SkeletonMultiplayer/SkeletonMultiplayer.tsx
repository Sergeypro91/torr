import { JSX, RefObject, useEffect, useRef } from 'react';

type SkeletonMultiplayerProps = {
    counter?: number;
    element: (props: { ref: RefObject<unknown> | null }) => JSX.Element;

    observer?: IntersectionObserver;
};

export const SkeletonMultiplayer = ({
    counter = 1,
    element: Element,
    observer,
}: SkeletonMultiplayerProps) => {
    const elements = [];
    const observingElement = useRef<HTMLDivElement>(null);

    for (let i = 0; i < counter; i++) {
        elements.push(
            <Element
                ref={!i ? observingElement : null}
                key={`skeleton-${i}`}
            />,
        );
    }

    useEffect(() => {
        if (observer && observingElement?.current) {
            observer.observe(observingElement.current);
        }
    }, [observer]);

    return <>{elements}</>;
};
