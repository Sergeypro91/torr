import { MediaType } from '@/types';
import { VirtuosoGridHandle } from 'react-virtuoso';

export type HeaderContainerOptions = {
    isEmpty: boolean;
    isLoading: boolean;
    isNotFound: boolean;
};

export type SearchResultProps = {
    rowId?: string;
    rowCount?: number;
    gap?: number;
};

export type RequestOptions = {
    query: string;
    mediaType: MediaType;
    page?: number;
};

export type ScrollOptions = {
    element: VirtuosoGridHandle;
    index: number;
};
