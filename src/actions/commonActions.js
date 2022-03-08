import {
  CHECK_INTERNET,
  CLEAR_SNACK_ALERT,
  SET_SNACK_ALERT,
  SET_CUSTOM_THEME,
  SET_QR_CODE_DATA,
  WEBSOCKET_CONNECT,
  WEBSOCKET_CONNECT_SUCCESS,
  WEBSOCKET_CONNECT_FAILURE,
  SET_FORE_PUSH_NOTIFICATION,
  CLEAR_FORE_PUSH_NOTIFICATION,
} from './actionTypes';

import {getHubConnection} from '../services/socketServices';
import {webSocketConnectionActionGroups} from '../helpers/actionHelper';

const checkInternet = status => {
  return {
    type: CHECK_INTERNET,
    status,
  };
};

const setSnackAlert = message => {
  return {
    type: SET_SNACK_ALERT,
    payload: {
      message,
    },
  };
};

const clearSnackAlert = message => {
  return {
    type: CLEAR_SNACK_ALERT,
    payload: {},
  };
};

const setCustomTheme = themeMode => {
  return {
    type: SET_CUSTOM_THEME,
    payload: {
      themeMode,
    },
  };
};

const updateQRCodeData = qrCode => {
  return {
    type: SET_QR_CODE_DATA,
    payload: {
      qrCodeData: qrCode,
    },
  };
};

const setForeGroundPushNotification = message => {
  return {
    type: SET_FORE_PUSH_NOTIFICATION,
    payload: {
      message,
    },
  };
};

const clearForeGroundPushNotification = () => {
  return {
    type: CLEAR_FORE_PUSH_NOTIFICATION,
    payload: {},
  };
};

const getWebSocketConnection = (
  group,
  senderMessage,
  recieverName,
  connection,
  screenName,
) => {
  return async dispatch => {
    dispatch({
      type: WEBSOCKET_CONNECT,
      payload: {},
    });
    const webSocketActionGroups = webSocketConnectionActionGroups(screenName);
    if (webSocketActionGroups?.type) {
      dispatch({
        type: webSocketActionGroups?.type,
        payload: {},
      });
    }

    connection
      .start()
      .then(() => {
        connection
          .invoke(group, senderMessage)
          .then(result => {
            connection.on(recieverName, recieverMessage => {
              dispatch({
                type: WEBSOCKET_CONNECT_SUCCESS,
                payload: recieverMessage,
              });
              if (webSocketActionGroups?.typeSuccess) {
                dispatch({
                  type: webSocketActionGroups?.typeSuccess,
                  payload: recieverMessage,
                });
              }
            });
          })
          .catch(err => {
            dispatch({
              type: WEBSOCKET_CONNECT_FAILURE,
              payload: {},
            });
            if (webSocketActionGroups?.typeFailure) {
              dispatch({
                type: webSocketActionGroups?.typeFailure,
                payload: {},
              });
            }
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export {
  checkInternet,
  CHECK_INTERNET,
  setSnackAlert,
  SET_SNACK_ALERT,
  clearSnackAlert,
  CLEAR_SNACK_ALERT,
  setCustomTheme,
  SET_CUSTOM_THEME,
  updateQRCodeData,
  SET_QR_CODE_DATA,
  getWebSocketConnection,
  setForeGroundPushNotification,
  SET_FORE_PUSH_NOTIFICATION,
  clearForeGroundPushNotification,
  CLEAR_FORE_PUSH_NOTIFICATION,
};
