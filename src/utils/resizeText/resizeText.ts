import { isOverflown } from '@/utils';

type ResizeTextOptions = {
    element?: HTMLSpanElement;
    elements?: HTMLSpanElement[];
    minSize?: number;
    maxSize?: number;
    step?: number;
    unit?: string;
};
export const resizeText = ({
    element,
    elements,
    minSize = 10,
    maxSize = 512,
    step = 1,
    unit = 'px',
}: ResizeTextOptions) => {
    (elements || [element]).forEach((el) => {
        let i = minSize;
        let overflow = false;

        const parent = el?.parentElement;

        if (parent) {
            el.style.alignSelf = 'flex-start';

            while (!overflow && i < maxSize) {
                el.style.fontSize = `${i}${unit}`;
                overflow = isOverflown(parent);

                if (!overflow) i += step;
            }

            el.style.fontSize = `${i - step}${unit}`;
            el.style.alignSelf = 'flex-end';
        }
    });
};
