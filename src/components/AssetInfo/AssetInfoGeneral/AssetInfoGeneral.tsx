import React, { useEffect, useRef, useState } from 'react';
import { useAssetInfo } from '../hooks';
import { About, AssetInfoGeneralContainer, Genre, TypeAndDate } from './styled';
import { RingRating } from '@/components/AssetInfo/RingRating';
import { isOverflown } from '@/utils';

export const AssetInfoGeneral = () => {
    const { rating, genres, type, releaseDate } = useAssetInfo();
    const genreRef = useRef<HTMLDivElement>(null);
    const [isGenreOverflown, setIsGenreOverflown] = useState(false);

    useEffect(() => {
        if (genreRef.current) {
            setIsGenreOverflown(isOverflown(genreRef.current));
        }
    }, [genres]);

    return (
        <AssetInfoGeneralContainer>
            <RingRating ratingScore={rating} />
            <About>
                <Genre ref={genreRef} isOverflown={isGenreOverflown}>
                    <h4>{genres}</h4>
                </Genre>
                <TypeAndDate>{`${type}・${releaseDate}`}</TypeAndDate>
            </About>
        </AssetInfoGeneralContainer>
    );
};
