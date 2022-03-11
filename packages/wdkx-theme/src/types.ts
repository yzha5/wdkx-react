import { UIColor } from '@wdkx/color'

export interface Theme {
    breakpoints: Breakpoints
    font: {
        size: number
        size4K: number
        family: string
    }
    palette: Palette
    zIndex: ZIndex
}

export interface Palette {
    scheme: 'light' | 'dark'
    disabled: { background: string; text: string; border: string } //这些不常用的颜色直接使用字符串
    background: { view: string; root: string }
    text: string
    primary: UIColor
    secondary: UIColor
    info: UIColor
    success: UIColor
    warn: UIColor
    error: UIColor
}

interface Breakpoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}

interface ZIndex {
    backplate: number
    navbar: number
}
