import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type VergeState = {
  data: object;
  id: string;
  displayName: string;
  createdAt: number;
  fileName: string;
  line: number;
};

export type VergeStateType = {
  vergeStates: VergeState[];
  currentIndex: number;
  searchText: string;
};

export type RootStateType = {
  vergeState: VergeStateType;
};

export type GetState = () => RootStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<RootStateType, Action<string>>;
