import { ipcRenderer } from 'electron';
import { addNewState } from '../actions/vergeState';
import { isVergeState } from '../actions/types';
import { Store, VergeState } from '../reducers/types';

class IpcDispatchConnector {
  store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  connect() {
    ipcRenderer.on('new-state', (_, data) => {
      if (!isVergeState(data)) {
        throw new Error('invalid json');
      }
      const vergeState = data as VergeState;
      this.store.dispatch(addNewState(vergeState));
    });
  }
}

export default IpcDispatchConnector;
