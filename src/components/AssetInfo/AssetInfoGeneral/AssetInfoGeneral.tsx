import React, { useEffect, useRef, useState } from 'react';
import { isOverflown, calculateTickerTime } from '@/utils';
import { MediaType } from '@/types';
import { RingRating } from '../RingRating';
import { About, AssetInfoGeneralContainer, Genre, TypeAndDate } from './styled';

type AssetInfoGeneralProps = {
    genres: null | string;
    rating: number;
    type: MediaType.MOVIE | MediaType.TV | MediaType.PERSON | null;
    releaseDate: null | string;
};

export const AssetInfoGeneral = ({
    genres,
    rating,
    type,
    releaseDate,
}: AssetInfoGeneralProps) => {
    const genreRef = useRef<HTMLDivElement>(null);
    const [isGenreOverflown, setIsGenreOverflown] = useState(false);
    const [tickerTime, setTickerTime] = useState(0);

    useEffect(() => {
        if (genreRef.current) {
            setTickerTime(calculateTickerTime(genreRef.current));
            setIsGenreOverflown(isOverflown(genreRef.current));
        }
    }, [genres]);

    return (
        <AssetInfoGeneralContainer>
            <RingRating ratingScore={rating} />
            <About>
                <Genre
                    ref={genreRef}
                    isOverflown={isGenreOverflown}
                    isEmpty={!genres}
                    tickerTime={tickerTime}
                >
                    <h4>{genres}</h4>
                </Genre>
                <TypeAndDate isEmpty={!type}>
                    {type ? `${type}・${releaseDate}` : ''}
                </TypeAndDate>
            </About>
        </AssetInfoGeneralContainer>
    );
};
