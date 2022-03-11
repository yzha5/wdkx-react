import { GlobalProps } from '@emotion/react'

export const base: GlobalProps['styles'] = (theme) => ({
    '*,*::before,*::after': {
        boxSizing: 'border-box',
        // transition: 'all .05s ease', //切换动效
    },
    html: {
        fontFamily:
            '-apple-system,BlinkMacSystemFont, Arial,Helvetica, sans-serif',
    },
    body: { margin: 0 },
    a: {
        textDecoration: 'none',
    },
    button: {
        outline: 'none',
    },
})
