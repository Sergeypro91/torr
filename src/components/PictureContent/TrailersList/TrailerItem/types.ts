import { ListItemOptions } from '@/components';
import { Video } from '@/types';

export type TrailerItemProps = ListItemOptions<Video> & {
    onAssetFocus?: (
        layout: HTMLElement,
        item: Video & { focusId?: string },
    ) => void;
};
