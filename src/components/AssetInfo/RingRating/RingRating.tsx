import React, { useMemo } from 'react';
import {
    FillRing,
    PercentRing,
    Pie,
    Rate,
    RingRatingContainer,
} from './styled';

export type RingRatingProps = {
    ratingScore: number;
    size?: number;
    strokeWidth?: number;
};

export const RingRating = ({
    ratingScore = 0,
    size = 100,
    strokeWidth = 6,
}: RingRatingProps) => {
    const ratingPercent = useMemo(() => {
        return ratingScore ? Math.round((ratingScore / 10) * 100) : 0;
    }, [ratingScore]);

    return (
        <RingRatingContainer size={size}>
            <Rate>{ratingScore.toFixed(1)}</Rate>

            <Pie viewBox={`0 0 40 40`} size={size}>
                <FillRing
                    strokeWidth={`${strokeWidth}`}
                    strokeDasharray={`100,100`}
                    fill="none"
                    cx="20"
                    cy="20"
                    r="15.91549431"
                />
                <PercentRing
                    percent={ratingPercent}
                    strokeWidth={`${strokeWidth}`}
                    strokeLinecap="round"
                    strokeDasharray={`${ratingPercent},100`}
                    cx="20"
                    cy="20"
                    r="15.91549431"
                />
            </Pie>
        </RingRatingContainer>
    );
};
