/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK,
  ADD_LINK_SUCCESS,
   ADD_LINK_FAIL,
   ADD_LINK_CANCELLED,
} from './constants';

export function addLink(link) {
  return {
    type: ADD_LINK,
    link,
  };
}

export function addLinkSuccess(link) {
  return {
    type: ADD_LINK_SUCCESS,
    link,
  };
}

export function addLinkFail(link, message) {
  return {
    type: ADD_LINK_FAIL,
    link,
    message,
  };
}

export function addLinkCancelled() {
  return {
    type: ADD_LINK_CANCELLED,
  };
}
