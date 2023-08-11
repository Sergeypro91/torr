import { debounce } from 'lodash-es';
import { VirtuosoGridHandle } from 'react-virtuoso';

type scrollToElemOptions = {
    elemRef: HTMLElement;
    block?: ScrollLogicalPosition;
    behavior?: ScrollBehavior;
    inline?: ScrollLogicalPosition;
};

export const scrollTo = debounce(
    ({ elemRef, block, behavior = 'smooth', inline }: scrollToElemOptions) => {
        setTimeout(() => {
            elemRef.scrollIntoView({
                block,
                behavior,
                inline,
            });
        });
    },
    150,
);

type scrollToItemOptions = {
    element: VirtuosoGridHandle;
    index: number;
    align?: 'center' | 'end' | 'start';
};

export const scrollToItem = ({
    element,
    index,
    align = 'center',
}: scrollToItemOptions) => {
    setTimeout(() => {
        element.scrollToIndex({
            index,
            align,
        });
    }, 300);
};
