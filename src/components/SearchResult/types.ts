import { MediaType } from '@/types';

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
