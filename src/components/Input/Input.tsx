import React, {
    ChangeEvent,
    KeyboardEvent,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { debounce } from 'lodash-es';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { InputContainer, InputField } from './styled';

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
            event.preventDefault();

            if (onInput) {
                onInput(event.target.value);
            }
        }, 300),
        [onInput],
    );

    /**
     * @description Prevent page reload on checkmark press
     */
    const handleSubmit = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.keyCode === 65376) {
            event.preventDefault();
        }
    };

    return (
        <InputContainer
            ref={ref}
            focused={focused}
            focusKey={focusKey}
            onKeyDown={handleSubmit}
        >
            <InputField
                ref={inputRef}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onInput={handleInput}
            />
        </InputContainer>
    );
};
