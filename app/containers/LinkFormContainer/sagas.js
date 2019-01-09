// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { createLink } from '../../api';
import { ADD_LINK } from './constants';

function* addLink(action) {
  try {
    yield call(createLink, action.link);
  } catch (e) {
    console.log(e.message);
  }
}

// Individual exports for testing
export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

// All sagas to be loaded
export default [
  addLinkSaga,
];
