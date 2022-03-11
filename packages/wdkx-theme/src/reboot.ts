import { Theme } from './types'
import { GlobalProps } from '@emotion/react'

export function reboot(t: Theme): GlobalProps['styles'] {
    return {
        html: {
            backgroundColor: t.palette.background.root,
            color: t.palette.text,
        },
        a: {
            color: t.palette.primary.lightRatio(0.2).value,
            '&:hover': {
                color: t.palette.primary.hover().value,
            },
            '&:active': {
                color: t.palette.primary.active().value,
            },
        },
        '@media (min-width:3840px)': {
            html: { fontSize: `${t.font.size4K}px` },
        },
    }
}
