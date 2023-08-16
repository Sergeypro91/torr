import React from 'react';
import { SmallArrow } from '@/assets/images/svgr';
import { SelectorProps } from './types';
import { useSelector } from './useSelector';
import {
    SelectorContainer,
    SelectorOptionsWrapper,
    SelectorOption,
    SelectorOptions,
    Arrows,
} from './styled';
import { useFocus } from '@/hooks';

export const Selector = (props: SelectorProps) => {
    const {
        ref,
        focused,
        selectorRef,
        options,
        currentOption,
        currentOptionId,
        handleWheel,
        handleKeyDown,
        handleSelectOption,
    } = useSelector(props);
    useFocus({ ref, focused });

    return (
        <SelectorContainer
            ref={ref}
            focused={focused}
            onWheel={handleWheel}
            onKeyDown={handleKeyDown}
        >
            <SelectorOptionsWrapper ref={selectorRef}>
                <SelectorOptions>
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

                {currentOptionId < options.length - 1 ? (
                    <SmallArrow rotate={180} />
                ) : null}
            </Arrows>
        </SelectorContainer>
    );
};
