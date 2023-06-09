import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { Loading } from '@/assets/images/svgr';
import { ButtonContainer } from './styled';

export type ButtonSize = 'small' | 'medium' | 'normal' | 'big';

export type ButtonProps = {
    children?: ReactNode;
    type?: 'submit' | 'reset' | 'button';
    icon?: FunctionComponent;
    size?: ButtonSize;
    loading?: boolean;

    action?: () => void;
};

export const Button = ({
    children,
    type = 'button',
    icon: Icon,
    size = 'normal',
    loading = false,
    action,
}: ButtonProps) => {
    const handleClick = useCallback(() => {
        if (action && !loading) {
            action();
        }
    }, [action, loading]);

    const { ref, focused } = useFocusable({
        trackChildren: true,
        onEnterPress: handleClick,
    });

    return (
        <ButtonContainer
            ref={ref}
            focused={focused}
            type={type}
            size={size}
            isIconButton={Boolean(Icon && !children)}
            onClick={handleClick}
            disabled={loading}
        >
            {loading ? <Loading /> : null}
            {Icon && !loading ? <Icon /> : null}
            <span>{children}</span>
        </ButtonContainer>
    );
};
