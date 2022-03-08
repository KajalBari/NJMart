import {
  SUPPORT_USER,
  SUPPORT_USER_SUCCESS,
  SUPPORT_USER_FAILURE,
  GET_SUPPORT_DETAILS,
  GET_SUPPORT_DETAILS_SUCCESS,
  GET_SUPPORT_DETAILS_FAILURE,
  SUPPORT_USER_GET_VIEW_DETAILS,
  SUPPORT_USER_GET_VIEW_DETAILS_SUCCESS,
  SUPPORT_USER_GET_VIEW_DETAILS_FAILURE,
} from './actionTypes';
import {axiosGetWithToken, axiosPostWithToken} from '../services/apiServices';
import {API} from '../config/api';
import store from '../services/storageServices';
import {setSnackAlert} from './commonActions';

const getSupportData = () => {
  return async dispatch => {
    dispatch({
      type: GET_SUPPORT_DETAILS,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;
    axiosGetWithToken(API.SUPPORT_USER_GET, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_SUPPORT_DETAILS_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_SUPPORT_DETAILS_FAILURE,
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
          type: GET_SUPPORT_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const supportUser = supportObj => {
  return async dispatch => {
    await dispatch({
      type: SUPPORT_USER,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    const supportbody = {
      full_name: supportObj.full_name,
      query: supportObj.query,
    };
    axiosPostWithToken(API.SUPPORT_USER, supportbody, token)
      .then(async sup => {
        if (sup.status === 200) {
          dispatch({
            type: SUPPORT_USER_SUCCESS,
            payload: sup.data,
          });
        } else {
          dispatch({
            type: SUPPORT_USER_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              sup?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: SUPPORT_USER_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getSupportViewDetails = id => {
  return async dispatch => {
    await dispatch({
      type: SUPPORT_USER_GET_VIEW_DETAILS,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(`${API.SUPPORT_USER_GET_VIEW_DETAILS}/${id}`, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(setSnackAlert(res?.data?.message || ''));
          setTimeout(() => {
            dispatch({
              type: SUPPORT_USER_GET_VIEW_DETAILS_SUCCESS,
              payload: res.data,
            });
          }, 2000);
        } else {
          dispatch({
            type: SUPPORT_USER_GET_VIEW_DETAILS_FAILURE,
            payload: {},
          });
          dispatch(
            setSnackAlert(
              res?.data?.status || 'Something went wrong. Please try again.',
            ),
          );
        }
      })
      .catch(err => {
        dispatch({
          type: SUPPORT_USER_GET_VIEW_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

export {supportUser, getSupportData, getSupportViewDetails};
