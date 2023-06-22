import React, { useMemo } from 'react';
import {
    FillRing,
    PercentRing,
    Pie,
    Rate,
    RingRatingContainer,
} from './styled';

export type RingRatingProps = {
    ratingScore: number | null;
    radius?: number;
    strokeWidth?: number;
};

export const RingRating = ({
    ratingScore,
    radius = 40,
    strokeWidth = 12,
}: RingRatingProps) => {
    const ratingPercent = useMemo(() => {
        return ratingScore
            ? parseInt(((ratingScore / 10) * 100).toFixed(), 10)
            : 0;
    }, [ratingScore]);

    const size = useMemo(() => radius * 2 + strokeWidth, [radius, strokeWidth]);

    if (!ratingScore) {
        return null;
    }

    return (
        <RingRatingContainer size={size}>
            <Rate>{ratingScore.toFixed(1)}</Rate>

            <Pie viewBox={`0 0 ${size} ${size}`} size={size}>
                <FillRing
                    strokeWidth={`${strokeWidth}`}
                    fill="none"
                    cx={`${size / 2}`}
                    cy={`${size / 2}`}
                    r={`${radius}`}
                />
                <PercentRing
                    percent={ratingPercent}
                    strokeWidth={`${strokeWidth}`}
                    strokeLinecap="round"
                    strokeDasharray={`${
                        ((2 * 3.14 * radius) / 100) * ratingPercent
                    }`}
                    cx={`${size / 2}`}
                    cy={`${size / 2}`}
                    r={`${radius}`}
                />
            </Pie>
        </RingRatingContainer>
    );
};
