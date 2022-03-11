import { GlobalProps } from '@emotion/react'

export const display: GlobalProps['styles'] = () => {
    return {
        '.display-flex': {
            display: 'flex',
        },
        '.flex-wrap': {
            flexWrap: 'wrap',
        },
        '.display-grid': {
            display: 'grid',
        },
        '.justify-content-center': {
            justifyContent: 'center',
        },
        '.justify-content-between': {
            justifyContent: 'space-between',
        },
        '.align-items-center': {
            alignItems: 'center',
        },
        '.flex-center-middle': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
}
