import {HubConnectionBuilder, HttpTransportType} from '@microsoft/signalr';
import {API} from '../config/api';

export const getHubConnection = () => {
  const newConnection = new HubConnectionBuilder()
    .withUrl(API.WEBSOCKET_CONNECT, {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets,
    })
    .withAutomaticReconnect()
    .build();
  return newConnection;
};
