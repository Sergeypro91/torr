import React, { useCallback, useEffect } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useAppStore } from '@/stores';
import { FocusableElement } from '@/types';
import {
    ExitPopupContainer,
    Prompt,
    PromptKeyContainer,
    PromptTitle,
    PromptActions,
} from './styled';
import { closeApp } from '@/lib';

type PromptKeyProps = {
    title: string;
    onPress: (props: Pick<FocusableElement, 'title'>) => void;
};

const PromptKey = ({ title, onPress }: PromptKeyProps) => {
    const { ref, focused } = useFocusable({
        onEnterPress: onPress,
        extraProps: {
            title,
        },
    });

    return (
        <PromptKeyContainer ref={ref} focused={focused}>
            {title}
        </PromptKeyContainer>
    );
};

export const Exit = () => {
    const toggleExit = useAppStore((state) => state.toggleExit);
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const { ref, focusKey, setFocus, focusSelf } = useFocusable({
        trackChildren: true,
        isFocusBoundary: true,
    });

    useEffect(() => {
        focusSelf();

        return () => {
            if (selectedAsset) {
                setFocus(selectedAsset.title);
            }
        };
    }, [focusSelf, selectedAsset, setFocus]);

    const onPress = useCallback(
        (props: Pick<FocusableElement, 'title'>) => {
            if (props.title === 'Leave') {
                closeApp();
            } else {
                if (selectedAsset) {
                    setFocus(selectedAsset.title);
                }
                toggleExit(false);
            }
        },
        [toggleExit, setFocus, selectedAsset],
    );

    return (
        <FocusContext.Provider value={focusKey}>
            <ExitPopupContainer>
                <Prompt>
                    <PromptTitle>
                        Are you sure you want to leave the app?
                    </PromptTitle>

                    <PromptActions ref={ref}>
                        <PromptKey
                            key="Leave"
                            title="Leave"
                            onPress={onPress}
                        />

                        <PromptKey
                            key="Return"
                            title="Return"
                            onPress={onPress}
                        />
                    </PromptActions>
                </Prompt>
            </ExitPopupContainer>
        </FocusContext.Provider>
    );
};

export const ExitPopup = () => {
    const exit = useAppStore((state) => state.exit);

    if (!exit) {
        return null;
    }

    return <Exit />;
};
