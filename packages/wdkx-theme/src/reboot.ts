import { Theme } from './types'
import { GlobalProps } from '@emotion/react'

const SCROLLBAR_SIZE = 14
const sbl = {
    border: 'rgb(204,204,204)',
    track: 'rgb(230,230,230)',
    thumb: 'rgb(128,128,128)',
    thumbHover: 'rgb(102,102,102)',
}
const sbd = {
    border: 'rgb(51,51,51)',
    track: 'rgb(26,26,26)',
    thumb: 'rgb(128,128,128)',
    thumbHover: 'rgb(153,153,153)',
}
export function reboot(t: Theme): GlobalProps['styles'] {
    const sbObj = t.palette.scheme === 'dark' ? sbd : sbl
    return {
        //webkit scrollbar
        '*::-webkit-scrollbar': {
            width: `${SCROLLBAR_SIZE}px`,
            height: `${SCROLLBAR_SIZE}px`,
            '&-corner': {
                backgroundColor: sbObj.thumb,
            },
            '&-track': {
                border: `solid 1px ${sbObj.border}`,
                backgroundColor: sbObj.track,
            },
            '&-thumb': {
                borderRadius: `${SCROLLBAR_SIZE / 2}px`,
                backgroundColor: sbObj.thumb,
                border: 'solid 3px transparent',
                backgroundClip: 'content-box',
                '&:hover': {
                    backgroundColor: sbObj.thumbHover,
                },
            },
        },

        //firefox scrollbar
        '::-moz-scrollbar': {
            width: SCROLLBAR_SIZE,
            height: SCROLLBAR_SIZE,
            '&-thumb': {
                borderRadius: SCROLLBAR_SIZE / 2,
                // backgroundColor: theme.palette.grey.hsl,
                '&:hover': {
                    // backgroundColor: theme.palette.grey.darkColor(theme).hsl,
                },
            },
        },

        html: {
            backgroundColor: t.palette.background.root,
            color: t.palette.text,
        },
        a: {
            color: t.palette.primary.lightRatio(0.2).toString(),
            '&:hover': {
                color: t.palette.primary.hover().toString(),
            },
            '&:active': {
                color: t.palette.primary.active().toString(),
            },
        },
        '@media (min-width:3840px)': {
            html: { fontSize: `${t.font.size4K}px` },
        },
    }
}
