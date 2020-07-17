import { ipcMain } from 'electron';
import TCPServer from './tcp/server';

export default class IpcServerConnector {
  server: TCPServer;

  constructor(server: TCPServer) {
    this.server = server;
  }

  connect() {
    ipcMain.on('history', (_, data) => {
      this.server.send(data.toString());
    });
  }
}
