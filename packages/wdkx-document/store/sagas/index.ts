import { all } from '@redux-saga/core/effects'
import themeSaga from './theme'

export default function* rootSaga() {
    yield all([themeSaga()])
}
