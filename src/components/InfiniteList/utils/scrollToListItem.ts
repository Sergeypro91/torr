import { FixedSizeList } from 'react-window';

const scrollToList = (elem: FixedSizeList, elemId: number, wait: number) =>
    new Promise((resolve) =>
        setTimeout(() => {
            elem.scrollToItem(elemId, 'center');
            resolve(true);
        }, wait),
    );

type ScrollToListItemOptions = {
    listElem: FixedSizeList;
    itemElem: Element;
    itemIndex: number;
};

type ScrollToListItem = (
    option: ScrollToListItemOptions,
    wait?: number,
) => void;

export const scrollToListItem: ScrollToListItem = async (
    { listElem, itemElem, itemIndex },
    wait = 300,
) => {
    await scrollToList(listElem, itemIndex, wait);
    itemElem.scrollIntoView({
        block: 'start',
        inline: 'start',
    });
};
