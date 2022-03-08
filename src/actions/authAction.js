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
} from './actionTypes';
import {axiosPost, axiosPostWithToken} from '../services/apiServices';
import {API} from '../config/api';
import store from '../services/storageServices';
import {setSnackAlert} from './commonActions';

const authenticateUser = (loginObj, fcmToken, navigation) => {
  return async dispatch => {
    dispatch({
      type: AUTHENTICATE_USER,
      payload: {},
    });
    const body = {
      email: loginObj.emailID,
      password: loginObj.password,
      Otp: '',
      NotificationToken: fcmToken ? fcmToken : null,
    };
    axiosPost(API.AUTHENTICATE_USER, body)
      .then(async res => {
        if (res.status === 200) {
          if (loginObj.rememberMe) {
            await store.save('rememberCredentials', true);
          }
          await dispatch({
            type: AUTHENTICATE_USER_SUCCESS,
            payload: res.data,
          });
          //navigation.navigate('Dashboard');
        } else {
          dispatch({
            type: AUTHENTICATE_USER_FAILURE,
            payload: res.data,
          });
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: AUTHENTICATE_USER_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const refreshToken = (userData, hasMPIN, navigation) => {
  return async dispatch => {
    dispatch({
      type: REFRESH_TOKEN,
      payload: {},
    });
    const token = userData?.jwtToken;
    const refreshToken = userData?.refreshToken;
    const body = {
      RefreshToken: refreshToken,
    };
    axiosPostWithToken(API.REFRESH_TOKEN, body, token)
      .then(async res => {
        if (res.status === 200) {
          await store.delete('userData');
          await store.save('userData', res.data);
          await dispatch({
            type: REFRESH_TOKEN_SUCCESS,
            payload: res.data,
          });
          setTimeout(() => {
            if (navigation) {
              if (hasMPIN) {
                navigation.navigate('Dashboard');
              } else {
                navigation.navigate('SetAppPassCode');
              }
            }
          }, 3000);
        } else {
          dispatch({
            type: REFRESH_TOKEN_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: REFRESH_TOKEN_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const registerUser = registerObj => {
  return async dispatch => {
    await dispatch({
      type: REGISTER_USER,
      payload: {},
    });
    const body = {
      firstName: registerObj.firstName,
      lastName: registerObj.lastName,
      email: registerObj.emailID,
      password: registerObj.password,
      confirmPassword: registerObj.confirmPassword,
      acceptTerms: registerObj.termsAndConditions,
      RefferalCode: registerObj.referralId,
      MobileNumber: registerObj.mobileNumber,
      CountryCode: registerObj.countryCode,
    };
    axiosPost(API.REGISTER_USER, body)
      .then(async res => {
        if (res.status === 200) {
          dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: REGISTER_USER_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const forgotPassword = emailID => {
  return async dispatch => {
    await dispatch({
      type: FORGOT_PASSWORD,
      payload: {},
    });
    const body = {
      email: emailID,
    };
    axiosPost(API.FORGOT_PASSWORD, body)
      .then(async res => {
        if (res.status === 200) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: FORGOT_PASSWORD_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: FORGOT_PASSWORD_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const changePassword = changePasswordObj => {
  return async dispatch => {
    await dispatch({
      type: CHANGE_PASSWORD,
      payload: {},
    });
    const body = {
      oldPassword: changePasswordObj.oldPassword,
      newPassword: changePasswordObj.newPassword,
      confirmPassword: changePasswordObj.confirmPassword,
    };
    axiosPost(API.CHANGE_PASSWORD, body)
      .then(async res => {
        if (res.status === 200) {
          dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: CHANGE_PASSWORD_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: CHANGE_PASSWORD_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const logoutAction = navigation => {
  return async dispatch => {
    await dispatch({
      type: LOGOUT,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;
    const refreshToken = userData?.refreshToken;
    const body = {
      token: refreshToken,
    };
    axiosPostWithToken(API.LOGOUT, body, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(setUserData({}));
          await store.clear();
          setTimeout(() => {
            dispatch({
              type: LOGOUT_SUCCESS,
              payload: res.data,
            });
            navigation.navigate('Home');
          }, 2000);
        } else {
          dispatch({
            type: LOGOUT_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: LOGOUT_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const clearAuthState = () => {
  return async dispatch => {
    await dispatch({
      type: CLEAR_AUTH_STATE,
      payload: {},
    });
  };
};

const setUserData = userData => {
  return async dispatch => {
    await dispatch({
      type: SET_USER_DATA,
      payload: userData,
    });
  };
};

const loginOtp = (body, submitForOTP, navigation) => {
  return async dispatch => {
    dispatch({
      type: LOGIN_OTP,
      payload: {},
    });

    axiosPost(API.AUTHENTICATE_USER, body)
      .then(async res => {
        if (res.status === 200) {
          await store.save('userData', res && res?.data);
          await dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          await dispatch({
            type: LOGIN_OTP_SUCCESS,
            payload: {data: res?.data, submitForOTP},
          });
          if (submitForOTP) {
            await dispatch({
              type: LOGIN_COMPLETE,
              payload: {},
            });
            navigation.navigate('SetAppPassCode');
          }
        } else {
          dispatch({
            type: LOGIN_OTP_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: LOGIN_OTP_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const postAppPassCode = (mPin, navigation) => {
  return async dispatch => {
    dispatch({
      type: POST_APP_PASSCODE,
      payload: {},
    });
    const body = {
      MPinHash: mPin,
    };
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosPostWithToken(API.POST_APP_PASSCODE, body, token)
      .then(async res => {
        if (res.status === 200) {
          await store.save('hasMPIN', true);
          await dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          await dispatch({
            type: POST_APP_PASSCODE_SUCCESS,
            payload: {},
          });
          navigation.navigate('Dashboard');
        } else {
          dispatch({
            type: POST_APP_PASSCODE_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: POST_APP_PASSCODE_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

export {
  authenticateUser,
  refreshToken,
  registerUser,
  forgotPassword,
  changePassword,
  setUserData,
  clearAuthState,
  logoutAction,
  loginOtp,
  postAppPassCode,
};
