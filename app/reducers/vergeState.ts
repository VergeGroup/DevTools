import { ipcRenderer } from 'electron';
import { VergeStateType } from './types';
import {
  ADD_NEW_STATE,
  VergeStateActions,
  UPDATE_CURRENT_INDEX,
  UPDATE_SEARCH_TEXT,
  SEND_HISTORY
} from '../actions/types';

const initialState: VergeStateType = {
  vergeStates: [],
  currentIndex: 0,
  searchText: ''
};

export default function vergeState(
  state = initialState,
  action: VergeStateActions
): VergeStateType {
  switch (action.type) {
    case ADD_NEW_STATE:
      return {
        vergeStates: [action.payload.data, ...state.vergeStates],
        currentIndex: state.currentIndex + 1,
        searchText: state.searchText
      };
    case UPDATE_CURRENT_INDEX:
      return {
        vergeStates: state.vergeStates,
        currentIndex: action.payload.index,
        searchText: state.searchText
      };
    case UPDATE_SEARCH_TEXT:
      return {
        vergeStates: state.vergeStates,
        currentIndex: state.currentIndex,
        searchText: action.payload.value
      };
    case SEND_HISTORY:
      ipcRenderer.send('history', action.payload.id.toString());
      return state;
    default:
      return state;
  }
}
