import React, {
    KeyboardEvent,
    useCallback,
    useEffect,
    useRef,
    WheelEvent,
} from 'react';
import { debounce } from 'lodash-es';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { SelectorProps } from './types';

export const useSelector = ({
    currentOption,
    options,
    setOption,
}: SelectorProps) => {
    const selectorRef = useRef<HTMLDivElement>(null);
    const currentOptionId = options.findIndex((item) => item === currentOption);

    const { ref, focused } = useFocusable({
        trackChildren: true,
    });

    const selectOption = useCallback(
        (direction: boolean) => {
            const newOption = direction
                ? options[
                      currentOptionId >= options.length - 1
                          ? currentOptionId
                          : currentOptionId + 1
                  ]
                : options[
                      currentOptionId === 0
                          ? currentOptionId
                          : currentOptionId - 1
                  ];
            setOption(newOption);
        },
        [currentOptionId, options, setOption],
    );

    const handleWheel = debounce((event: WheelEvent<HTMLDivElement>) => {
        if (event.deltaY > 0) {
            selectOption(true);
        }

        if (event.deltaY < 0) {
            selectOption(false);
        }
    }, 100);

    const handleSelectOption = (option: string) => {
        return (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            setOption(option);

            (e.target as HTMLDivElement).scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            });
        };
    };

    const handleKeyDown = (event: KeyboardEvent) => {
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
    };

    useEffect(() => {
        if (selectorRef.current) {
            const focusedElement = selectorRef.current.querySelector('#focus');

            focusedElement?.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            });
        }
    }, [currentOption]);

    return {
        ref,
        focused,
        selectorRef,
        options,
        currentOption,
        currentOptionId,
        handleWheel,
        handleKeyDown,
        handleSelectOption,
    };
};
