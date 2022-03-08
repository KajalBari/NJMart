import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  CLEAR_AUTH_STATE,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  SET_USER_DATA,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  LOGIN_OTP,
  LOGIN_OTP_SUCCESS,
  LOGIN_OTP_FAILURE,
  LOGIN_COMPLETE,
  POST_APP_PASSCODE,
  POST_APP_PASSCODE_SUCCESS,
  POST_APP_PASSCODE_FAILURE,
} from '../actions/actionTypes';

const INIT_STATE = {
  userData: {},
  loginLoading: false,
  registerUserLoading: false,
  registerUserSuccess: false,
  forgotPasswordLoading: false,
  forgotPasswordSuccess: false,
  changePasswordLoading: false,
  changePasswordSuccess: false,
  logoutLoading: false,
  logoutFailure: false,
  refreshTokenLoading: false,
  loginOTPLoading: false,
  loginResponseComplete: false,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        loginLoading: true,
        loginResponseComplete: false,
      };
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginResponseComplete: true,
      };
    case AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginResponseComplete: false,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        userData: {},
        refreshTokenLoading: true,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        refreshTokenLoading: false,
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        userData: {},
        refreshTokenLoading: false,
      };
    case REGISTER_USER:
      return {
        ...state,
        registerUserLoading: true,
        registerUserSuccess: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserLoading: false,
        registerUserSuccess: true,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        registerUserLoading: false,
        registerUserSuccess: false,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPasswordLoading: true,
        forgotPasswordSuccess: false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordSuccess: true,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordSuccess: false,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        changePasswordLoading: true,
        changePasswordSuccess: false,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordSuccess: true,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordSuccess: false,
      };
    case LOGOUT:
      return {
        ...state,
        logoutLoading: true,
        logoutFailure: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
        logoutFailure: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logoutLoading: false,
        logoutFailure: true,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        ...INIT_STATE,
      };
    case LOGIN_OTP:
      return {
        ...state,
        userData: {},
        loginOTPLoading: true,
      };
    case LOGIN_OTP_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loginOTPLoading: false,
      };
    case LOGIN_OTP_FAILURE:
      return {
        ...state,
        userData: {},
        loginOTPLoading: false,
      };
    case LOGIN_COMPLETE:
      return {
        ...state,
        loginResponseComplete: false,
      };
    case POST_APP_PASSCODE:
      return {
        ...state,
        appPasscode: '',
        appPasscodeLoading: true,
      };
    case POST_APP_PASSCODE_SUCCESS:
      return {
        ...state,
        appPasscode: action.payload,
        appPasscodeLoading: false,
      };
    case POST_APP_PASSCODE_FAILURE:
      return {
        ...state,
        appPasscode: '',
        appPasscodeLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
