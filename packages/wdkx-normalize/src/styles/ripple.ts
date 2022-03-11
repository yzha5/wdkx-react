import { GlobalProps, keyframes } from '@emotion/react'

const rippleKeyframes = keyframes({
    to: {
        opacity: 0,
        transform: 'scale(2)',
    },
})
export const ripple: GlobalProps['styles'] = () => ({
    '.ripple': {
        position: 'relative',
        overflow: 'hidden',
        '& &--container': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            '& span': {
                position: 'absolute',
                transform: 'scale(0)',
                borderRadius: '100%',
                opacity: 0.3,
                backgroundColor: 'white',
                animation: `${rippleKeyframes} 1s`,
            },
        },
    },
})
