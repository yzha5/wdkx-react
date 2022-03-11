import { all, takeEvery } from '@redux-saga/core/effects'
import { SET_PALETTE, SET_SCHEME } from '../actions/action-types'
import { ISetPalette, ISetScheme } from '../actions/theme'

function* handleSetInterceptScheme(action: ISetScheme) {
    localStorage.setItem('scheme', action.isDark ? 'dark' : 'light')
}

function* interceptSetSchemeAction() {
    yield takeEvery(SET_SCHEME, handleSetInterceptScheme)
}

function* handleSetInterceptPalette(action: ISetPalette) {
    console.log('Intercept setPalette：', action.type, action.payload)
}

function* interceptSetPaletteAction() {
    yield takeEvery(SET_PALETTE, handleSetInterceptPalette)
}

export default function* themeSaga() {
    yield all([interceptSetSchemeAction(), interceptSetPaletteAction()])
}
