import {
  ADD_BANK_DETAILS,
  ADD_BANK_DETAILS_SUCCESS,
  ADD_BANK_DETAILS_FAILURE,
  GET_BANK_DETAILS,
  GET_BANK_DETAILS_SUCCESS,
  GET_BANK_DETAILS_FAILURE,
  DELETE_BANK_DETAILS,
  DELETE_BANK_DETAILS_SUCCESS,
  DELETE_BANK_DETAILS_FAILURE,
  ADD_KYC_DETAILS,
  ADD_KYC_DETAILS_SUCCESS,
  ADD_KYC_DETAILS_FAILURE,
  GET_KYC_DETAILS,
  GET_KYC_DETAILS_SUCCESS,
  GET_KYC_DETAILS_FAILURE,
  GET_IFSC_CODE_BANK_DETAILS,
  GET_IFSC_CODE_BANK_DETAILS_SUCCESS,
  GET_IFSC_CODE_BANK_DETAILS_FAILURE,
  CLEAR_IFSC_CODE_BANK_DETAILS,
  POST_PROFILE_IMAGE,
  POST_DEPOSIT_AMOUNT_SUCCESSS,
  POST_DEPOSIT_AMOUNT_FAILURE,
  GET_PROFILE_DATA,
  GET_PROFILE_DATA_SUCCESS,
  GET_PROFILE_DATA_FAILURE,
  POST_PROFILE_IMAGE_SUCCESS,
  POST_PROFILE_IMAGE_FAILURE,
} from './actionTypes';
import {
  axiosGetWithToken,
  axiosPostFormDataWithMedia,
  axiosPostWithToken,
} from '../services/apiServices';
import {API} from '../config/api';
import store from '../services/storageServices';
import {setSnackAlert} from './commonActions';

const addBankDetails = addBankDetailsObj => {
  return async dispatch => {
    await dispatch({
      type: ADD_BANK_DETAILS,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    const body = {
      account_holder_name: addBankDetailsObj.accountHolderName,
      bank_name: addBankDetailsObj.bankName,
      branch_name: addBankDetailsObj.branchName,
      account_no: addBankDetailsObj.accountNumber,
      IFSC_code: addBankDetailsObj.ifscCode,
      swift_code: addBankDetailsObj.swiftCode,
      city: addBankDetailsObj.city,
    };

    axiosPostWithToken(API.ADD_BANK_DETAILS, body, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          dispatch({
            type: ADD_BANK_DETAILS_SUCCESS,
            payload: res.data,
          });
          dispatch(getBankDetails());
        } else {
          dispatch({
            type: ADD_BANK_DETAILS_FAILURE,
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
          type: ADD_BANK_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getBankDetails = () => {
  return async dispatch => {
    await dispatch({
      type: GET_BANK_DETAILS,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_BANK_DETAILS, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(setSnackAlert(res?.data?.message || ''));
          dispatch({
            type: GET_BANK_DETAILS_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_BANK_DETAILS_FAILURE,
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
          type: GET_BANK_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const deleteBankDetails = bankDetailsID => {
  return async dispatch => {
    await dispatch({
      type: DELETE_BANK_DETAILS,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    const body = {
      id: bankDetailsID,
    };

    axiosPostWithToken(API.DELETE_BANK_DETAILS, body, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          dispatch({
            type: DELETE_BANK_DETAILS_SUCCESS,
            payload: res.data,
          });
          dispatch(getBankDetails());
        } else {
          dispatch({
            type: DELETE_BANK_DETAILS_FAILURE,
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
          type: DELETE_BANK_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};
const addKycDetails = addKycDetailsObj => {
  return async dispatch => {
    await dispatch({
      type: ADD_KYC_DETAILS,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;
    axiosPostWithToken(API.ADD_KYC_DETAILS, addKycDetailsObj, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          dispatch({
            type: ADD_KYC_DETAILS_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: ADD_KYC_DETAILS_FAILURE,
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
          type: ADD_KYC_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getKycDetails = () => {
  return async dispatch => {
    await dispatch({
      type: GET_KYC_DETAILS,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_KYC_STATUS, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(setSnackAlert(res?.data?.message || ''));
          dispatch({
            type: GET_KYC_DETAILS_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_KYC_DETAILS_FAILURE,
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
          type: GET_KYC_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getIfscBankDetails = ifscCode => {
  return async dispatch => {
    await dispatch({
      type: GET_IFSC_CODE_BANK_DETAILS,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(`${API.GET_IFSC_CODE_BANK_DETAILS}/${ifscCode}`, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(setSnackAlert(res?.data?.message || ''));
          setTimeout(() => {
            dispatch({
              type: GET_IFSC_CODE_BANK_DETAILS_SUCCESS,
              payload: res.data,
            });
          }, 2000);
        } else {
          dispatch({
            type: GET_IFSC_CODE_BANK_DETAILS_FAILURE,
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
          type: GET_IFSC_CODE_BANK_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const clearIfscbankDetails = () => {
  return async dispatch => {
    await dispatch({
      type: CLEAR_IFSC_CODE_BANK_DETAILS,
      payload: {},
    });
  };
};

const uploadProfileImage = body => {
  return async dispatch => {
    await dispatch({
      type: POST_PROFILE_IMAGE,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;
    axiosPostFormDataWithMedia(API.POST_PROFILE_IMAGE, body, token)
      .then(async result => {
        if (result.status === 200) {
          await dispatch({
            type: POST_PROFILE_IMAGE_SUCCESS,
            payload: result?.data,
          });
        } else {
          dispatch(
            setSnackAlert(
              res?.data?.status || 'Something went wrong. Please try again.',
            ),
          );
          await dispatch({
            type: POST_PROFILE_IMAGE_FAILURE,
            payload: {},
          });
        }
      })
      .catch(err => {
        dispatch({
          type: POST_PROFILE_IMAGE_FAILURE,
          payload: {},
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getProfileData = () => {
  return async dispatch => {
    await dispatch({
      type: GET_PROFILE_DATA,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;
    axiosGetWithToken(API.GET_PROFILE_DATA, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_PROFILE_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
          await dispatch({
            type: GET_PROFILE_DATA_FAILURE,
            payload: {},
          });
        }
      })
      .catch(err => {
        dispatch({
          type: GET_PROFILE_DATA_FAILURE,
          payload: {},
        });
      });
  };
};

export {
  addBankDetails,
  getBankDetails,
  deleteBankDetails,
  addKycDetails,
  getKycDetails,
  getIfscBankDetails,
  clearIfscbankDetails,
  uploadProfileImage,
  getProfileData,
};
