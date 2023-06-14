import { Fetcher } from 'openapi-typescript-fetch';
import { paths } from './documentation';

const apiClient = Fetcher.for<paths>();

apiClient.configure({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    init: {
        headers: {},
    },
    use: [],
});

export const getTrends = apiClient
    .path('/api/picture/trends/{mediaType}/{timeWindow}')
    .method('get')
    .create();