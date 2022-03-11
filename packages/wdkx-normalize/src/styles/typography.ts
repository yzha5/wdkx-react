import { GlobalProps } from '@emotion/react'

export const typography: GlobalProps['styles'] = () => ({
    h1: {
        fontSize: '2.5rem',
        lineHeight: '3.75rem',
        fontWeight: 700,
        margin: '2rem 0 1.5rem 0',
    },
    h2: {
        fontSize: '2.25rem',
        lineHeight: '3.375rem',
        fontWeight: 700,
        margin: '1.75rem 0 1.25rem 0',
    },
    h3: {
        fontSize: '2rem',
        lineHeight: '3rem',
        fontWeight: 700,
        margin: '1.5rem 0 1rem 0',
    },
    h4: {
        fontSize: '1.75rem',
        lineHeight: '2.625rem',
        fontWeight: 700,
        margin: '1.25rem 0 0.75rem 0',
    },
    h5: {
        fontSize: '1.5rem',
        lineHeight: '2.25rem',
        fontWeight: 700,
        margin: '1rem 0 0.5rem 0',
    },
    h6: {
        fontSize: '1.25rem',
        lineHeight: '1,875rem',
        fontWeight: 700,
        margin: '0.75rem 0 0.25rem 0',
    },
    '.text': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: 400,
    },
    '.text-small': {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontWeight: 400,
    },
    '.text-extra-small': {
        fontSize: '0.75rem',
        lineHeight: '1rem',
        fontWeight: 400,
    },
    '.text-tiny': { fontWeight: 300 },
    '.text-regular': { fontWeight: 400 },
    '.text-medium': { fontWeight: 500 },
    '.text-bold, b': { fontWeight: 700 },
})
