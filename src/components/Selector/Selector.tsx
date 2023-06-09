import React, { useCallback, useEffect, useRef, WheelEvent } from 'react';
import { debounce } from 'lodash-es';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { SmallArrow } from '@/assets/images/svgr';
import { useKeyDownListener } from '@/components/Selector/utils/useKeyDownListener';
import {
    SelectorContainer,
    SelectorOptionsWrapper,
    SelectorOption,
    SelectorOptions,
    Arrows,
} from './styled';

type SelectorProps = {
    currentOption?: string;
    options: string[];
    setOption: (option?: string) => void;
};

export const Selector = ({
    currentOption,
    options,
    setOption,
}: SelectorProps) => {
    const selectorRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const selectorOptions = [undefined, ...options];
    const currentOptionId = selectorOptions.findIndex(
        (item) => item === currentOption,
    );

    const { ref, focused } = useFocusable({
        trackChildren: true,
    });

    const selectOption = useCallback(
        (direction: boolean) => {
            const newOption = direction
                ? selectorOptions[
                      currentOptionId >= selectorOptions.length - 1
                          ? currentOptionId
                          : currentOptionId + 1
                  ]
                : selectorOptions[
                      currentOptionId < 0
                          ? currentOptionId
                          : currentOptionId - 1
                  ];
            setOption(newOption);
        },
        [currentOptionId, selectorOptions, setOption],
    );

    const handleWheel = debounce((event: WheelEvent<HTMLDivElement>) => {
        if (event.deltaY > 0) {
            selectOption(true);
        }

        if (event.deltaY < 0) {
            selectOption(false);
        }
    }, 100);

    const handleSelectOption = (option?: string) => {
        return (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            setOption(option);

            (e.target as HTMLDivElement).scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            });
        };
    };

    useKeyDownListener(focused, selectOption);

    useEffect(() => {
        if (selectorRef.current) {
            const focusedElement = selectorRef.current.querySelector('#focus');

            focusedElement?.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            });
        }
    }, [currentOption]);

    return (
        <SelectorContainer ref={ref} onWheel={handleWheel} focused={focused}>
            <SelectorOptionsWrapper ref={selectorRef}>
                <SelectorOptions>
                    <SelectorOption
                        key="all"
                        id={!currentOption ? 'focus' : ''}
                        selected={!currentOption}
                        onClick={handleSelectOption(undefined)}
                    >
                        all
                    </SelectorOption>
                    {options.map((option) => {
                        return (
                            <SelectorOption
                                key={option}
                                id={option === currentOption ? 'focus' : ''}
                                selected={option === currentOption}
                                onClick={handleSelectOption(option)}
                            >
                                {option}
                            </SelectorOption>
                        );
                    })}
                </SelectorOptions>
            </SelectorOptionsWrapper>

            <Arrows>
                {currentOptionId > 0 ? <SmallArrow /> : null}

                {currentOptionId < selectorOptions.length - 1 ? (
                    <SmallArrow rotate={180} />
                ) : null}
            </Arrows>
        </SelectorContainer>
    );
};
