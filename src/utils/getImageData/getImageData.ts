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

type getImageSrcOption<DataType> = {
    data?: null | DataType;
    size: ImageSize;
    type: ImageType;
};

export const getImageSrc = <
    DataType extends Partial<MovieSlim | TvSlim | PersonSlim> = Partial<
        MovieSlim | TvSlim | PersonSlim
    >,
>({
    data,
    size = 'original',
    type = 'posterPath',
}: getImageSrcOption<DataType>) => {
    const imgService = process.env.NEXT_PUBLIC_API_IMG;
    let result;

    if (data && type in data) {
        result =
            data[type as keyof typeof data] ||
            data['backdropPath' as keyof typeof data] ||
            data['posterPath' as keyof typeof data];
    }

    return result ? `${imgService}/${size}${result}` : '';
};
