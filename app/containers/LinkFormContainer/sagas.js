// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { createLink } from '../../api';
import { ADD_LINK, ADD_LINK_CANCELLED } from './constants';
import { goBack } from 'react-router-redux';
import { addLinkSuccess, addLinkFail } from './actions';

function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSuccess(serverLink));
    yield put(goBack());
  } catch (e) {
    yield put(addLinkFail(action.link, e.message));
  }
}

// Individual exports for testing
export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

export function* addLinkCancelSaga() {
  yield* takeLatest(ADD_LINK_CANCELLED, () => put(goBack()));
}

// All sagas to be loaded
export default [
  addLinkSaga,
  addLinkCancelSaga,
];
