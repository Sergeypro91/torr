import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useFocus } from '@/hooks';
import { useBackgroundStore, useRouteStore } from '@/stores';
import { HOME_PAGE_TIMEOUT } from './constants';

export const useBackgroundPlayer = () => {
    const [showPlayer, setShowPlayer] = useState(false);
    const videoUrl = useBackgroundStore((store) => store.videoUrl);
    const setVideoUrl = useBackgroundStore((store) => store.setVideoUrl);
    const playing = useBackgroundStore((store) => store.isPlaying);
    const setPlaying = useBackgroundStore((store) => store.setPlaying);
    const pathName = useRouteStore((state) => state.route.pathName);
    const ref = useRef<HTMLDivElement>(null);

    const keyPresInterceptor = (eventCode: string) => {
        const isKeyPresOnHomePage = !pathName && ['Escape'].includes(eventCode);
        const isKeyPresAnywhereExceptHomePage =
            !!pathName &&
            [
                'Escape',
                'Enter',
                'ArrowUp',
                'ArrowDown',
                'ArrowLeft',
                'ArrowRight',
            ].includes(eventCode);

        return isKeyPresOnHomePage || isKeyPresAnywhereExceptHomePage;
    };

    const onTrailerStart = () => {
        setShowPlayer(true);
    };

    const onTrailerEnd = () => {
        setVideoUrl(null);
    };

    const onTrailerError = () => {
        setVideoUrl(null);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (keyPresInterceptor(event.code)) {
            event.stopPropagation();
            event.preventDefault();
        } else {
            return;
        }

        switch (event.code) {
            case 'Escape':
                setVideoUrl(null);
                return;
            case 'Enter':
                setPlaying();
                return;
            default:
                return;
        }
    };

    useFocus({ ref, focused: showPlayer });

    useEffect(() => {
        if (videoUrl) {
            setVideoUrl(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathName]);

    useEffect(() => {
        setPlaying(false);
        setShowPlayer(false);
    }, [setPlaying, videoUrl]);

    useEffect(() => {
        let playingTimeout: NodeJS.Timeout;

        if (videoUrl) {
            if (!pathName) {
                playingTimeout = setTimeout(() => {
                    setPlaying(true);
                }, HOME_PAGE_TIMEOUT);
            } else {
                setPlaying(true);
            }
        }

        return () => {
            clearTimeout(playingTimeout);
        };
    }, [pathName, setPlaying, videoUrl]);

    return {
        ref,
        videoUrl,
        playing,
        showPlayer,
        handleKeyDown,
        onTrailerStart,
        onTrailerEnd,
        onTrailerError,
    };
};
