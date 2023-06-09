import {
    MediaType,
    ImageSize,
    ImageType,
    MovieSlim,
    TvSlim,
    PersonSlim,
} from '@/types';

type getImageTitleOption = null | Partial<MovieSlim | TvSlim | PersonSlim>;

export const getImageTitle = (data?: getImageTitleOption) => {
    const title = data?.mediaType === MediaType.PERSON ? 'name' : 'title';
    let result;

    if (data && title in data) {
        result = data[title as keyof typeof data];
    }

    return result ? `${result}` : '';
};

type getImageSrcOption = {
    data?: null | Partial<MovieSlim | TvSlim | PersonSlim>;
    size: ImageSize;
    type: ImageType;
};

export const getImageSrc = ({
    data,
    size = 'original',
    type = 'posterPath',
}: getImageSrcOption) => {
    const imgService = process.env.NEXT_PUBLIC_API_IMG;
    let result;

    if (data && type in data) {
        result =
            data[type as keyof typeof data] ||
            data['backdropPath' as keyof typeof data];
    }

    return result ? `${imgService}/${size}${result}` : '';
};
