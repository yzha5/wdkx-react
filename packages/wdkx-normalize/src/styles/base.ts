import { GlobalProps } from '@emotion/react'

export const base: GlobalProps['styles'] = (theme) => ({
    '*,*::before,*::after': {
        boxSizing: 'border-box',
        transition: 'all .1s ease', //切换动效
    },
    html: {
        fontFamily:
            '-apple-system,BlinkMacSystemFont, Arial,Helvetica, sans-serif',
        minHeight: '100%',
    },
    body: { margin: 0, minHeight: '100%' },
    a: {
        textDecoration: 'none',
    },
    button: {
        outline: 'none',
    },
})
