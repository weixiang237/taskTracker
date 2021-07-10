import { takeEvery, all } from 'redux-saga/effects'

export function * load () {
    //yield takeEvery(actionType, action)
  }

  export default function * rootSaga () {
    yield all([load()])
  }