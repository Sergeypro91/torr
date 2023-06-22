import React, { useCallback, useEffect } from 'react';
import {
    FocusContext,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useAppStore } from '@/stores';
import { SelectElement } from '@/types';
import { closeApp } from '@/utils';
import {
    ExitPopupContainer,
    Prompt,
    PromptKeyContainer,
    PromptTitle,
    PromptActions,
} from './styled';

type PromptKeyProps = {
    focusId: string;
    onPress: (props: Pick<SelectElement, 'focusId'>) => void;
};

const PromptKey = ({ focusId, onPress }: PromptKeyProps) => {
    const { ref, focused } = useFocusable({
        onEnterPress: onPress,
        extraProps: {
            focusId,
        },
    });

    return (
        <PromptKeyContainer ref={ref} focused={focused}>
            {focusId}
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
                setFocus(selectedAsset.focusId);
            }
        };
    }, [focusSelf, selectedAsset, setFocus]);

    const onPress = useCallback(
        (props: Pick<SelectElement, 'focusId'>) => {
            if (props.focusId === 'Leave') {
                closeApp();
            } else {
                if (selectedAsset) {
                    setFocus(selectedAsset.focusId);
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
                            focusId="Leave"
                            onPress={onPress}
                        />

                        <PromptKey
                            key="Return"
                            focusId="Return"
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
