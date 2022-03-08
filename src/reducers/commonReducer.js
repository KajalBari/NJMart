import {
  CHECK_INTERNET,
  SET_SNACK_ALERT,
  CLEAR_SNACK_ALERT,
  SET_CUSTOM_THEME,
  SET_QR_CODE_DATA,
  WEBSOCKET_CONNECT,
  WEBSOCKET_CONNECT_FAILURE,
  WEBSOCKET_CONNECT_SUCCESS,
  SET_FORE_PUSH_NOTIFICATION,
  CLEAR_FORE_PUSH_NOTIFICATION,
} from '../actions/actionTypes';

const INIT_STATE = {
  internet: false,
  snackAlertMessage: '',
  customThemeMode: false,
  qrCodeData: '',
  socketMessage: '',
  socketConnectionLoading: false,
  foreGroundPushMessage: null,
};

const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHECK_INTERNET:
      return {
        ...state,
        internet: action.status,
      };
    case SET_SNACK_ALERT:
      return {
        ...state,
        snackAlertMessage: action?.payload?.message,
      };
    case CLEAR_SNACK_ALERT:
      return {
        ...state,
        snackAlertMessage: '',
      };
    case SET_CUSTOM_THEME:
      return {
        ...state,
        customThemeMode: action?.payload?.themeMode || false,
      };
    case SET_QR_CODE_DATA:
      return {
        ...state,
        qrCodeData: action?.payload?.qrCodeData || '',
      };
    case WEBSOCKET_CONNECT:
      return {
        ...state,
        socketConnectionLoading: true,
        socketMessage: action?.payload,
      };
    case WEBSOCKET_CONNECT_SUCCESS:
      return {
        ...state,
        socketConnectionLoading: false,
        socketMessage: action?.payload,
      };
    case WEBSOCKET_CONNECT_FAILURE:
      return {
        ...state,
        socketConnectionLoading: false,
        socketMessage: action?.payload,
      };
    case SET_FORE_PUSH_NOTIFICATION:
      return {
        ...state,
        foreGroundPushMessage: action.payload.message,
      };
    case CLEAR_FORE_PUSH_NOTIFICATION:
      return {
        ...state,
        foreGroundPushMessage: {},
      };
    default:
      return state;
  }
};

export default commonReducer;
