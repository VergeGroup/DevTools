import { VergeState } from '../reducers/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isVergeState(obj: any): boolean {
  return (
    typeof obj.createdAt === 'number' &&
    typeof obj.displayName === 'string' &&
    typeof obj.id === 'string' &&
    typeof obj.data === 'object' &&
    typeof obj.fileName === 'string' &&
    typeof obj.line === 'number'
  );
}

export const ADD_NEW_STATE = 'ADD_NEW_STATE';
export const UPDATE_CURRENT_INDEX = 'UPDATE_CURRENT_INDEX';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const SEND_HISTORY = 'SEND_HISTORY';

export interface AddNewStateAction {
  type: typeof ADD_NEW_STATE;
  payload: {
    data: VergeState;
  };
}

export interface UpdateCurrentIndex {
  type: typeof UPDATE_CURRENT_INDEX;
  payload: {
    index: number;
  };
}

export interface UpdateSearchText {
  type: typeof UPDATE_SEARCH_TEXT;
  payload: {
    value: string;
  };
}

export interface SendHistory {
  type: typeof SEND_HISTORY;
  payload: {
    id: string;
  };
}

export type VergeStateActions =
  | AddNewStateAction
  | UpdateCurrentIndex
  | UpdateSearchText
  | SendHistory;
