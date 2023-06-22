import { useAppStore } from '@/stores';
import { useMemo } from 'react';
import { MediaType, movieGenres, tvGenres } from '@/types';

export const useAssetInfo = () => {
    const selectedAsset = useAppStore((state) => state.selectedAsset);

    const title = useMemo(() => {
        if (selectedAsset) {
            if (selectedAsset.mediaType !== MediaType.PERSON) {
                return selectedAsset.title;
            }

            return selectedAsset.name;
        }

        return null;
    }, [selectedAsset]);

    const description = useMemo(() => {
        if (selectedAsset && selectedAsset.mediaType !== MediaType.PERSON) {
            return selectedAsset.overview;
        }

        return null;
    }, [selectedAsset]);

    const rating = useMemo(() => {
        if (selectedAsset) {
            if (selectedAsset.mediaType !== MediaType.PERSON) {
                return selectedAsset.voteAverage;
            }

            return selectedAsset.popularity;
        }

        return null;
    }, [selectedAsset]);

    const genres = useMemo(() => {
        if (selectedAsset && selectedAsset.mediaType !== MediaType.PERSON) {
            const genres = selectedAsset.genres;
            const genreMap = new Map(
                (selectedAsset.mediaType === MediaType.MOVIE
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
    }, [selectedAsset]);

    const type = useMemo(() => {
        return selectedAsset?.mediaType || null;
    }, [selectedAsset]);

    const releaseDate = useMemo(() => {
        return selectedAsset && selectedAsset.mediaType !== MediaType.PERSON
            ? new Date(selectedAsset.releaseDate).getFullYear()
            : null;
    }, [selectedAsset]);

    return { title, description, rating, genres, type, releaseDate };
};
