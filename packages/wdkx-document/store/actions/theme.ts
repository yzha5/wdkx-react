import {
    SET_PALETTE,
    SET_PALETTE_TYPE,
    SET_SCHEME,
    SET_SCHEME_TYPE,
} from './action-types'
import { DeepPartial } from '@wdkx/types-react'
import { Palette } from '@wdkx/theme-react' //配色方案

//配色方案
export interface ISetScheme {
    type: SET_SCHEME_TYPE
    isDark: boolean
}

export function setSchemeAction(isDark: boolean): ISetScheme {
    return {
        type: SET_SCHEME,
        isDark,
    }
}

//调色板
export interface ISetPalette {
    type: SET_PALETTE_TYPE
    payload: DeepPartial<Palette>
}

export function setPaletteAction(payload: DeepPartial<Palette>): ISetPalette {
    return {
        type: SET_PALETTE,
        payload,
    }
}
