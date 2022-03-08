import {
  GET_MARKET_DATA,
  GET_MARKET_DATA_SUCCESS,
  GET_MARKET_DATA_FAILURE,
} from './actionTypes';
import {axiosGet, axiosGetWithToken, axiosPost} from '../services/apiServices';
import {API} from '../config/api';
import store from '../services/storageServices';
import {setSnackAlert} from './commonActions';

const getMarketData = () => {
  return async dispatch => {
    dispatch({
      type: GET_MARKET_DATA,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_MARKET_DATA, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_MARKET_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_MARKET_DATA_FAILURE,
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
          type: GET_MARKET_DATA_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getMarketDataPreLogin = () => {
  return async dispatch => {
    dispatch({
      type: GET_MARKET_DATA,
      payload: {},
    });

    axiosGet(API.GET_MARKET_DATA_PRE_LOGIN)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_MARKET_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_MARKET_DATA_FAILURE,
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
          type: GET_MARKET_DATA_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

export {getMarketData, getMarketDataPreLogin};
