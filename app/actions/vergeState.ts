import { VergeState } from '../reducers/types';

import {
  AddNewStateAction,
  UpdateCurrentIndex,
  UpdateSearchText,
  SendHistory,
  ADD_NEW_STATE,
  UPDATE_CURRENT_INDEX,
  UPDATE_SEARCH_TEXT,
  SEND_HISTORY
} from './types';

export function addNewState(data: VergeState): AddNewStateAction {
  return {
    type: ADD_NEW_STATE,
    payload: {
      data
    }
  };
}

export function updateCurrentIndex(index: number): UpdateCurrentIndex {
  return {
    type: UPDATE_CURRENT_INDEX,
    payload: {
      index
    }
  };
}

export function updateSearchText(value: string): UpdateSearchText {
  return {
    type: UPDATE_SEARCH_TEXT,
    payload: {
      value
    }
  };
}

export function sendHistory(id: string): SendHistory {
  return {
    type: SEND_HISTORY,
    payload: {
      id
    }
  };
}
