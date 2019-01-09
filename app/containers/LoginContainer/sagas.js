// import { take, call, put, select } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';
import { LOGIN, CANCEL_LOGIN } from './constants';

function* handelDone() {
  yield put(goBack());
}

// Individual exports for testing
export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handelDone);
}

export function* cancelSaga() {
  yield* takeLatest(CANCEL_LOGIN, handelDone);
}

// All sagas to be loaded
export default [
  doLoginSaga,
  cancelSaga,
];
