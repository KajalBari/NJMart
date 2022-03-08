import {
  POST_NOTIFICATION_SETTINGS,
  POST_NOTIFICATION_SETTINGS_SUCCESS,
  POST_NOTIFICATION_SETTINGS_FAILURE,
} from './actionTypes';
import {API} from '../config/api';
import {axiosPostWithToken} from '../services/apiServices';
import store from '../services/storageServices';
import {setSnackAlert} from './commonActions';

const postNotificationSettings = body => {
  return async dispatch => {
    dispatch({
      type: POST_NOTIFICATION_SETTINGS,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosPostWithToken(API.POST_NOTIFICATION_SETTINGS, body, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          await dispatch({
            type: POST_NOTIFICATION_SETTINGS_SUCCESS,
            payload: res?.data,
          });
        } else {
          dispatch({
            type: POST_NOTIFICATION_SETTINGS_FAILURE,
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
          type: POST_NOTIFICATION_SETTINGS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

export {postNotificationSettings};
