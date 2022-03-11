import { ComponentColor } from '@wdkx/types-react'
import { Theme } from './types'
import { InitColor, UIColor } from '@wdkx/color'

export function NewColor(
    color: ComponentColor | undefined,
    theme: Theme
): UIColor {
    const isDark = theme.palette.scheme === 'dark'
    switch (color) {
        case 'primary':
            return theme.palette.primary
        case 'secondary':
            return theme.palette.secondary
        case 'info':
            return theme.palette.info
        case 'success':
            return theme.palette.success
        case 'warn':
            return theme.palette.warn
        case 'error':
            return theme.palette.error
        default:
            return InitColor(color, isDark)
    }
}
