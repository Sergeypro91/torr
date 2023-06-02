import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { InputContainer } from './styled';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { debounce } from 'lodash-es';

export type InputProps = {
    defaultValue?: string;
    placeholder?: string;
    focusKey?: string;
    onPress?: (inputRef: null | HTMLInputElement) => void;
    onInput?: (value: string) => void;
};

export const Input = ({
    defaultValue,
    placeholder,
    focusKey,
    onPress,
    onInput,
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { ref, focused } = useFocusable({
        trackChildren: true,
        onEnterPress: onPress,
        extraProps: inputRef.current,
    });

    useEffect(() => {
        if (inputRef?.current && !focused) {
            inputRef.current.blur();
        }
    }, [focused, inputRef]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleInput = useCallback(
        debounce((event: ChangeEvent<HTMLInputElement>) => {
            if (onInput) {
                onInput(event.target.value);
            }
        }, 300),
        [onInput],
    );

    return (
        <InputContainer ref={ref} focused={focused} focusKey={focusKey}>
            <input
                ref={inputRef}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onInput={handleInput}
            />
        </InputContainer>
    );
};
