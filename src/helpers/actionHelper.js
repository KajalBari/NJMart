import {
  EXCHANGE_ORDER_WEB_SOCKET,
  EXCHANGE_ORDER_WEB_SOCKET_FAILURE,
  EXCHANGE_ORDER_WEB_SOCKET_SUCCESS,
} from '../actions/actionTypes';

const webSocketConnectionActionGroups = screenName => {
  switch (screenName) {
    case 'ExchangeOrder':
      return {
        type: EXCHANGE_ORDER_WEB_SOCKET,
        typeSuccess: EXCHANGE_ORDER_WEB_SOCKET_SUCCESS,
        typeFailure: EXCHANGE_ORDER_WEB_SOCKET_FAILURE,
      };
    default:
      return null;
  }
};

export {webSocketConnectionActionGroups};
