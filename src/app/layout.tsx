import React from 'react';
import { StyledComponentsRegistry } from '../utils';
import './globals.css';
import { montserratFont } from '@/assets/fonts';

export const metadata = {
    title: 'Torr',
    description: 'Find and watch your video',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={montserratFont.className}>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
