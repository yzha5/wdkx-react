import styled from '@emotion/styled'
import { SidebarStyleProps } from './types'
import { CSSProperties } from 'react'
import { keyframes } from '@emotion/react'

const leftOpen = keyframes({
    from: {
        left: '-100%',
    },
    to: {
        left: 0,
    },
})

const rightOpen = keyframes({
    from: {
        right: '-100%',
    },
    to: {
        right: 0,
    },
})
const topOpen = keyframes({
    from: {
        top: '-100%',
    },
    to: {
        top: 0,
    },
})
const bottomOpen = keyframes({
    from: {
        bottom: '-100%',
    },
    to: {
        bottom: 0,
    },
})

export default styled.div<SidebarStyleProps>(({ location = 'left', theme }) => {
    function l(): CSSProperties {
        switch (location) {
            case 'top':
                return {
                    top: 0,
                    left: 0,
                    maxHeight: '100%',
                    animation: `${topOpen} 0.2s ease-in-out`,
                }
            case 'right':
                return {
                    top: 0,
                    right: 0,
                    maxWidth: '100%',
                    animation: `${rightOpen} 0.2s ease-in-out`,
                }
            case 'bottom':
                return {
                    bottom: 0,
                    left: 0,
                    maxHeight: '100%',
                    animation: `${bottomOpen} 0.2s ease-in-out`,
                }
            default:
                return {
                    top: 0,
                    left: 0,
                    maxWidth: '100%',
                    animation: `${leftOpen} 0.2s ease-in-out`,
                }
        }
    }

    return {
        label: 'sidebar',
        position: 'absolute',
        overflow: 'auto',
        width: location === 'left' || location === 'right' ? 'auto' : '100%',
        height: location === 'top' || location === 'bottom' ? 'auto' : '100%',
        ...l(),
        zIndex: theme.zIndex.sidebar,
    }
})
