import { Video } from '@/types';
import { ContentRowProps } from '@/components';

export type TrailersListProps = Pick<
    ContentRowProps<Video>,
    'rowId' | 'rowTitle' | 'dataState'
> &
    Partial<ContentRowProps<Video>>;
