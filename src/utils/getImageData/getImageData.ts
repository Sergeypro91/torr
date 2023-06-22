import {
    MediaType,
    ImageSize,
    ImageType,
    MovieSlim,
    TvSlim,
    PersonSlim,
} from '@/types';

type getImageTitleOption = Partial<MovieSlim | TvSlim | PersonSlim>;

export const getImageTitle = (data: getImageTitleOption) => {
    const title = data.mediaType === MediaType.PERSON ? 'name' : 'title';

    if (title in data) {
        return String(data[title as keyof typeof data]);
    }

    return '';
};

type getImageSrcOption = {
    data: Partial<MovieSlim | TvSlim | PersonSlim>;
    size: ImageSize;
    type: ImageType;
};

export const getImageSrc = ({
    data,
    size = 'original',
    type = 'posterPath',
}: getImageSrcOption) => {
    const imgService = process.env.NEXT_PUBLIC_API_IMG;

    if (type in data) {
        return `${imgService}${size}${data[type as keyof typeof data]}`;
    }

    return '';
};

type GetImageBlurHashOption = {
    data: Partial<MovieSlim | TvSlim | PersonSlim>;
    type: ImageType;
};
export const getImageBlurHash = ({ data, type }: GetImageBlurHashOption) => {
    const imgType = `${type}BlurHash` as const;

    if (imgType in data) {
        return String(data[imgType as keyof typeof data]);
    }

    return null;
};
