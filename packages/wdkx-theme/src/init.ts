import { InitColor } from '@wdkx/color'
import { DeepPartial } from '@wdkx/types-react'
import { DeepMerge } from '@wdkx/util-react'
import Color from 'color'
import { Theme } from './types'

const primaryLight = 'hsl(240,100%,50%)'
const primaryDark = 'hsl(240,100%,65%)'

const theme: Theme = {
    breakpoints: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
    font: {
        size: 16,
        size4K: 24,
        family: `'Noto Sans'`,
    },
    palette: {
        scheme: 'light',
        disabled: {
            background: 'hsl(0,0%,90%)',
            text: 'hsl(0,0%,80%)',
            border: 'hsl(0,0%,80%)',
        },
        background: {
            view: 'white',
            root: Color(primaryLight)
                .mix(Color('white'), 0.95)
                .hsl()
                .toString(),
        },
        text: Color(primaryDark).mix(Color('black'), 0.9).hsl().toString(),
        primary: InitColor(primaryLight, false, false),
        secondary: InitColor('hsl(240,10%,50%)', false, false),
        info: InitColor('hsl(210,100%,50%)', false, false),
        success: InitColor('hsl(144,100%,50%)', false, false),
        warn: InitColor('hsl(50,100%,50%)', false, false),
        error: InitColor('hsl(340,100%,50%)', false, false),
    },
    zIndex: {
        backplate: 1000,
        navbar: 800,
        sidebar: 900,
    },
}

const dark: DeepPartial<Theme> = {
    palette: {
        scheme: 'dark',
        disabled: {
            background: 'hsl(0,0%,15%)',
            text: 'hsl(0,0%,30%)',
            border: 'hsl(0,0%,30%)',
        },
        background: {
            view: Color(primaryLight)
                .mix(Color('black'), 0.64)
                .hsl()
                .toString(),
            root: Color(primaryLight).mix(Color('black'), 0.8).hsl().toString(),
        },
        text: Color(primaryDark).mix(Color('white'), 0.9).hsl().toString(),
        primary: InitColor(primaryDark, true, false),
        secondary: InitColor('hsl(240,10%,65%)', true, false),
        info: InitColor('hsl(210,100%,65%)', true, false),
        success: InitColor('hsl(144,100%,65%)', true, false),
        warn: InitColor('hsl(50,100%,65%)', true, false),
        error: InitColor('hsl(340,100%,65%)', true, false),
    },
}

export const lightTheme = theme
export const darkTheme = DeepMerge(theme, dark)
