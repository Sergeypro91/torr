import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash-es';
import { useAppStore } from '@/stores';
import { MediaType, movieGenres, SelectElement, tvGenres } from '@/types';
import { getDate } from '@/utils';

export const useAssetInfo = () => {
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const [asset, setAsset] = useState<null | SelectElement>(null);

    const title = useMemo(() => {
        if (asset) {
            if (asset.mediaType !== MediaType.PERSON) {
                return asset.title;
            }

            return asset.name;
        }

        return null;
    }, [asset]);

    const description = useMemo(() => {
        if (asset && asset.mediaType !== MediaType.PERSON) {
            return asset.overview;
        }

        return null;
    }, [asset]);

    const rating = useMemo(() => {
        if (asset) {
            if (asset.mediaType !== MediaType.PERSON) {
                return asset.voteAverage;
            }

            return asset.popularity;
        }

        return 0;
    }, [asset]);

    const genres = useMemo(() => {
        if (asset && asset.mediaType !== MediaType.PERSON) {
            const genres = asset.genres || [];
            const genreMap = new Map(
                (asset.mediaType === MediaType.MOVIE
                    ? movieGenres
                    : tvGenres
                ).map((genre) => [genre.id, genre]),
            );

            return genres
                .reduce((genres, genreId) => {
                    const genreString = genreMap.get(genreId)?.name;

                    if (genreString) {
                        genres.push(genreString);
                    }

                    return genres;
                }, [] as string[])
                .join(' | ');
        }

        return null;
    }, [asset]);

    const type = useMemo(() => {
        return asset?.mediaType ?? null;
    }, [asset]);

    const releaseDate = useMemo(() => {
        const calcRelease = (date: string | Date | number) => {
            const { day, month, year } = getDate(date);

            return `${day}.${month}.${year}`;
        };

        return asset && asset.mediaType !== MediaType.PERSON
            ? calcRelease(asset.releaseDate)
            : null;
    }, [asset]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setAssetsDebounce = useCallback(
        debounce((currentAsset: null | SelectElement) => {
            setAsset(currentAsset);
        }, 600),
        [selectedAsset],
    );

    useEffect(() => {
        setAssetsDebounce(selectedAsset);
    }, [selectedAsset, setAssetsDebounce]);

    return {
        selectedAsset,
        title,
        description,
        rating,
        genres,
        type,
        releaseDate,
    };
};
