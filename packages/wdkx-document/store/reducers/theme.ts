import { ISetPalette, ISetScheme } from '../actions/theme'
import { DeepPartial } from '@wdkx/types-react'
import { Theme } from '@wdkx/theme-react'
import { DeepMerge } from '@wdkx/util-react'

let initTheme: DeepPartial<Theme> = {}

export default function themeReducer(
    state: DeepPartial<Theme> = initTheme,
    action: ISetScheme | ISetPalette
): DeepPartial<Theme> {
    switch (action.type) {
        case 'SET_SCHEME':
            return {
                ...state,
                palette: { scheme: action.isDark ? 'dark' : 'light' },
            }
        case 'SET_PALETTE':
            return {
                ...state,
                palette: DeepMerge(state.palette, action.payload),
            }
        default:
            return state
    }
}
