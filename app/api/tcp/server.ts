import net from 'net';
import { WebContents } from 'electron';

interface IdentifiableSocket {
  id: number;
  socket: net.Socket;
}

export default class TCPServer {
  host: string;

  port: number;

  webContents: WebContents | undefined;

  server: net.Server;

  sockets: IdentifiableSocket[] = [];

  constructor(host: string, port: number, webContents?: WebContents) {
    this.host = host;
    this.port = port;
    this.webContents = webContents;

    this.server = net.createServer(socket => {
      const idSocket: IdentifiableSocket = {
        id: Math.floor(Math.random() * 1000),
        socket
      };
      this.sockets.push(idSocket);

      socket.on('data', data => {
        const obj = JSON.parse(data.toString());
        if (this.webContents) {
          this.webContents.send('new-state', obj);
        }
      });

      socket.on('close', () => {
        this.sockets = this.sockets.filter(sock => {
          return sock.id === idSocket.id;
        });
      });
    });
  }

  setWebContents(webContents: WebContents) {
    this.webContents = webContents;
  }

  start() {
    this.server.listen(this.port, this.host);
  }

  send(text: string) {
    this.sockets.forEach(sock => {
      sock.socket.write(text);
    });
  }

  sendTo(text: string, id: number) {
    this.sockets
      .filter(sock => {
        return sock.id === id;
      })
      .forEach(sock => {
        sock.socket.write(text);
      });
  }
}
