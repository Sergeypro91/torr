import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { Unknown } from '@/assets/images/svgr';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { ListItemOptions } from '@/components';
import { ParticipantPerson } from '@/types';
import {
    EmptyPersonImage,
    PersonData,
    PersonItemContainer,
    PersonItemWrapper,
    PersonName,
    PersonRole,
} from './styled';

export type PersonItemProps = ListItemOptions<ParticipantPerson> & {
    onAssetFocus?: (
        layout: HTMLElement,
        item: ParticipantPerson & { focusId?: string },
    ) => void;
};

export const PersonItem = ({
    rowItemId,
    itemData,
    itemStyle,
    onAssetFocus = () => {},
}: PersonItemProps) => {
    // const { itemStyle, itemData } = props;
    const imgService = process.env.NEXT_PUBLIC_API_IMG;
    const personRoleRef = useRef<HTMLElement>(null);

    const onPress = useCallback((props: ParticipantPerson) => {
        console.log('ON PERSON PRESS', { props });
    }, []);

    const { ref, focused, setFocus } = useFocusable({
        focusKey: rowItemId,
        onEnterPress: onPress,
        extraProps: itemData,
    });

    const handleAssetClick = useCallback(() => {
        setFocus(rowItemId);
    }, [setFocus, rowItemId]);

    const handleAssetDoubleClick = useCallback(() => {
        onPress(itemData);
    }, [onPress, itemData]);

    const personRoleHeight = useMemo(() => {
        return personRoleRef.current?.getBoundingClientRect().height || 0;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [personRoleRef.current]);

    useEffect(() => {
        if (focused && ref.current) {
            onAssetFocus(ref.current, { ...itemData, focusId: rowItemId });
        }
    }, [focused, itemData, rowItemId, onAssetFocus, ref]);

    return (
        <PersonItemContainer
            key={itemData.tmdbId}
            ref={ref}
            style={itemStyle}
            focused={focused}
            onClick={handleAssetClick}
            onDoubleClick={handleAssetDoubleClick}
        >
            <PersonItemWrapper>
                {itemData.profilePath ? (
                    <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        src={`${imgService}/w300${itemData.profilePath}`}
                        loading="lazy"
                        alt={itemData.name}
                    />
                ) : (
                    <EmptyPersonImage>
                        <Unknown />
                    </EmptyPersonImage>
                )}
                <PersonData>
                    <PersonName>{itemData.name}</PersonName>
                    <PersonRole height={focused ? personRoleHeight : 0}>
                        <span ref={personRoleRef}>
                            {itemData.job ?? itemData.character}
                        </span>
                    </PersonRole>
                </PersonData>
            </PersonItemWrapper>
        </PersonItemContainer>
    );
};
