import { DefaultTheme } from 'styled-components';

export type TorrTheme = typeof theme;

const theme = {
    name: 'default',
    palette: {
        primary: '#ffffff',
        success: '#42AF40',
        warning: '#BD5F09',
        error: '#BD0909',
        black: '#000000',
        gray: {
            90: '#1A1A1A',
            80: '#333333',
            70: '#4D4D4D',
            60: '#676767',
            50: '#808080',
            40: '#999999',
            30: '#B2B2B2',
            20: '#CCCCCC',
            10: '#E5E5E5',
        },
        white: '#ffffff',
    },
    space: 4,
    spacing: function (
        arg0?: number,
        arg1?: number,
        arg2?: number,
        arg3?: number,
    ) {
        return `
              ${arg0 ? `${arg0 * this.space}px` : arg0 ?? ''}
              ${arg1 ? `${arg1 * this.space}px` : arg1 ?? ''}
              ${arg2 ? `${arg2 * this.space}px` : arg2 ?? ''}
              ${arg3 ? `${arg3 * this.space}px` : arg3 ?? ''}
            `;
    },
    typography: {
        flowCircular:
            'FlowCircular, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif',
        h1: {
            'font-size': 76,
            'line-height': 92,
            'font-weight': '800',
        },
        h2: {
            'font-size': 47,
            'line-height': 69,
            'font-weight': '600',
        },
        h3Light: {
            'font-size': 29,
            'line-height': 35,
            'font-weight': '300',
        },
        h3: {
            'font-size': 29,
            'line-height': 35,
            'font-weight': '800',
        },
        h4: {
            'font-size': 18,
            'line-height': 23,
            'font-weight': '600',
        },
        pLight: {
            'font-size': 18,
            'line-height': 23,
            'font-weight': '300',
        },
        p: {
            'font-size': 18,
            'line-height': 23,
            'font-weight': '400',
        },
        skeleton: {
            'font-family': 'FlowCircular',
        },
        ellipsis: {
            'white-space': 'nowrap',
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
        },
    },
    hideScrollbar: {
        '&': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',

            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },
    },
    transition: 'all 300ms ease-out',
    animations: {
        backAndForth:
            '@keyframes backAndForth {\n        0%,\n        20% {\n            transform: translateX(0%);\n            left: 0;\n        }\n        80%,\n        100% {\n            transform: translateX(-100%);\n            left: 100%;\n        }\n    }',
    },
    boxShadow: {
        targetBorder: '0 0 0 4px white',
    },
    skeleton: {
        background:
            'linear-gradient(90deg, #808080 0%, #ffffff 8%, #808080 16%)',
        backgroundSize: '200% 100%',
    },
};

export const defaultTheme: DefaultTheme = theme;
