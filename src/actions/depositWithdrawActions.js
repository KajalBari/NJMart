import {
  GET_DEPOSITWITHDRAW_FEE,
  GET_DEPOSITWITHDRAW_FEE_SUCCESS,
  GET_DEPOSITWITHDRAW_FEE_FAILURE
} from './actionTypes';
import {axiosGetWithToken, axiosPostWithToken} from '../services/apiServices';
import {API} from '../config/api';
import store from '../services/storageServices';
import {setSnackAlert} from './commonActions';

const getDepositWithdrawFeesData = () => {
  return async dispatch => {
    dispatch({
      type: GET_DEPOSITWITHDRAW_FEE,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;
    axiosGetWithToken(API.GET_DEPOSITWITHDRAW, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_DEPOSITWITHDRAW_FEE_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_DEPOSITWITHDRAW_FEE_FAILURE,
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
          type: GET_DEPOSITWITHDRAW_FEE_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

export {getDepositWithdrawFeesData};
