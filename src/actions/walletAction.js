import {
  GET_WALLET_DATA,
  GET_WALLET_DATA_SUCCESS,
  GET_WALLET_DATA_FAILURE,
  GET_ACCOUNT_DETAILS,
  GET_ACCOUNT_DETAILS_FAILURE,
  GET_ACCOUNT_DETAILS_SUCCESS,
  POST_DEPOSIT_AMOUNT,
  POST_DEPOSIT_AMOUNT_SUCCESSS,
  POST_DEPOSIT_AMOUNT_FAILURE,
  GET_WITHDRAW_FEE,
  GET_WITHDRAW_FEE_SUCCESS,
  GET_WITHDRAW_FEE_FAILURE,
  POST_WITHDRAW_AMOUNT,
  POST_WITHDRAW_AMOUNT_SUCCESS,
  POST_WITHDRAW_AMOUNT_FAILURE,
  GET_INORDER_DATA,
  GET_INORDER_DATA_SUCCESS,
  GET_INORDER_DATA_FAILURE,
  GET_DEPOSIT_TRANSACTION_HISTORY,
  GET_DEPOSIT_TRANSACTION_HISTORY_SUCCESS,
  GET_DEPOSIT_TRANSACTION_HISTORY_FAILURE,
  GET_WITHDRAW_TRANSACTION_HISTORY,
  GET_WITHDRAW_TRANSACTION_HISTORY_SUCCESS,
  GET_WITHDRAW_TRANSACTION_HISTORY_FAILURE,
  GET_BANK_DETAILS_WALLET,
  GET_BANK_DETAILS_WALLET_SUCCESS,
  GET_BANK_DETAILS_WALLET_FAILURE,
  CLEAR_WITHDRAW_AMOUNT,
  GET_ADDRESS_FOR_COIN,
  GET_ADDRESS_FOR_COIN_SUCCESS,
  GET_ADDRESS_FOR_COIN_FAILURE,
  POST_WITHDRAW_AMOUNT_ALL_COINS,
  POST_WITHDRAW_AMOUNT_ALL_COINS_SUCCESS,
  POST_WITHDRAW_AMOUNT_ALL_COINS_FAILURE,
  CLEAR_WITHDRAW_AMOUNT_ALL_COINS,
} from './actionTypes';
import {
  axiosGetWithToken,
  axiosPostWithToken,
  axiosPostFormDataWithMedia,
} from '../services/apiServices';
import {API} from '../config/api';
import store from '../services/storageServices';
import {setSnackAlert} from './commonActions';

const getWalletData = () => {
  return async dispatch => {
    dispatch({
      type: GET_WALLET_DATA,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_WALLET_DATA, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_WALLET_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_WALLET_DATA_FAILURE,
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
          type: GET_WALLET_DATA_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getInOrderData = () => {
  return async dispatch => {
    dispatch({
      type: GET_INORDER_DATA,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_INORDER_DATA, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_INORDER_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_INORDER_DATA_FAILURE,
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
          type: GET_INORDER_DATA_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getWithDrawFee = () => {
  return async dispatch => {
    dispatch({
      type: GET_WITHDRAW_FEE,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_WITHDRAW_FEE, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_WITHDRAW_FEE_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_WITHDRAW_FEE_FAILURE,
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
          type: GET_WITHDRAW_FEE_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};
const getAccountDetails = () => {
  return async dispatch => {
    dispatch({
      type: GET_ACCOUNT_DETAILS,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_ACCOUNTDETAILS, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_ACCOUNT_DETAILS_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_ACCOUNT_DETAILS_FAILURE,
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
          type: GET_ACCOUNT_DETAILS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const addDepositAmount = (
  body,
  navigation,
  walletItem,
  totalAvailableBalance,
) => {
  return async dispatch => {
    dispatch({
      type: POST_DEPOSIT_AMOUNT,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;
    axiosPostFormDataWithMedia(API.POST_DEPOSIT_AMOUNT, body, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          await dispatch({
            type: POST_DEPOSIT_AMOUNT_SUCCESSS,
            payload: res.data,
          });
          navigation.navigate('WalletTransactionHistory', {
            walletItem,
            totalAvailableBalance,
          });
        } else {
          dispatch({
            type: POST_DEPOSIT_AMOUNT_FAILURE,
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
          type: POST_DEPOSIT_AMOUNT_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const withDrawAmount = (
  body,
  submitForOTP,
  navigation,
  walletItem,
  totalAvailableBalance,
) => {
  return async dispatch => {
    dispatch({
      type: POST_WITHDRAW_AMOUNT,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosPostWithToken(API.POST_WITHDRAW, body, token)
      .then(async res => {
        if (
          res.status === 200
          // &&
          // res?.data?.message === 'Withdrawal Otp sent on your email.'
        ) {
          await dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          await dispatch({
            type: POST_WITHDRAW_AMOUNT_SUCCESS,
            payload: {data: res?.data, submitForOTP},
          });
          if (submitForOTP) {
            clearWithDrawAmount();
            navigation.navigate('WalletTransactionHistory', {
              walletItem,
              totalAvailableBalance,
            });
          }
        } else {
          dispatch({
            type: POST_WITHDRAW_AMOUNT_FAILURE,
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
          type: POST_WITHDRAW_AMOUNT_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const withDrawAmountAllCoins = (
  body,
  submitForOTP,
  navigation,
  walletItem,
  totalAvailableBalance,
) => {
  return async dispatch => {
    dispatch({
      type: POST_WITHDRAW_AMOUNT_ALL_COINS,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosPostWithToken(API.POST_WITHDRAW, body, token)
      .then(async res => {
        if (
          res.status === 200
          // &&
          // res?.data?.message === 'Withdrawal Otp sent on your email.'
        ) {
          await dispatch(
            setSnackAlert(
              res?.data?.message || 'Something went wrong. Please try again.',
            ),
          );
          await dispatch({
            type: POST_WITHDRAW_AMOUNT_ALL_COINS_SUCCESS,
            payload: {data: res?.data, submitForOTP},
          });
          if (submitForOTP) {
            clearWithDrawAmount();
            navigation.navigate('WalletTransactionHistory', {
              walletItem,
              totalAvailableBalance,
            });
          }
        } else {
          dispatch({
            type: POST_WITHDRAW_AMOUNT_ALL_COINS_FAILURE,
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
          type: POST_WITHDRAW_AMOUNT_ALL_COINS_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getINRDepositTransactionHistory = () => {
  return async dispatch => {
    dispatch({
      type: GET_DEPOSIT_TRANSACTION_HISTORY,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_INR_DEPOSIT_TRANSACTION_HISTORY, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_DEPOSIT_TRANSACTION_HISTORY_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_DEPOSIT_TRANSACTION_HISTORY_FAILURE,
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
          type: GET_DEPOSIT_TRANSACTION_HISTORY_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getINRWithdrawTransactionHistory = () => {
  return async dispatch => {
    dispatch({
      type: GET_WITHDRAW_TRANSACTION_HISTORY,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_INR_WITHDRAW_TRANSACTION_HISTORY, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_WITHDRAW_TRANSACTION_HISTORY_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_WITHDRAW_TRANSACTION_HISTORY_FAILURE,
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
          type: GET_WITHDRAW_TRANSACTION_HISTORY_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getDepositTransactionHistory = coin_id => {
  return async dispatch => {
    dispatch({
      type: GET_DEPOSIT_TRANSACTION_HISTORY,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(
      `${API.GET_DEPOSIT_TRANSACTION_HISTORY}/${coin_id}`,
      token,
    )
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_DEPOSIT_TRANSACTION_HISTORY_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_DEPOSIT_TRANSACTION_HISTORY_FAILURE,
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
          type: GET_DEPOSIT_TRANSACTION_HISTORY_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getWithdrawTransactionHistory = coin_id => {
  return async dispatch => {
    dispatch({
      type: GET_WITHDRAW_TRANSACTION_HISTORY,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(`${API.GET_WITHDRAW_TRANSACTION_HISTORY}`, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_WITHDRAW_TRANSACTION_HISTORY_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_WITHDRAW_TRANSACTION_HISTORY_FAILURE,
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
          type: GET_WITHDRAW_TRANSACTION_HISTORY_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getBankDetailsForWallet = () => {
  return async dispatch => {
    await dispatch({
      type: GET_BANK_DETAILS_WALLET,
      payload: {},
    });

    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(API.GET_BANK_DETAILS, token)
      .then(async res => {
        if (res.status === 200) {
          dispatch(setSnackAlert(res?.data?.message || ''));
          dispatch({
            type: GET_BANK_DETAILS_WALLET_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_BANK_DETAILS_WALLET_FAILURE,
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
          type: GET_BANK_DETAILS_WALLET_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

// const withDrallCoinsWithdrawAmountawAmount = (
//   body,
//   submitForOTP,
//   navigation,
//   walletItem,
//   totalAvailableBalance,
// ) => {
//   return async dispatch => {
//     dispatch({
//       type: POST_WITHDRAW_AMOUNT,
//       payload: {},
//     });
//     const userData = await store.get('userData');
//     const token = userData?.jwtToken;
//     axiosPostWithToken(API.POST_WITHDRAW, body, token)
//       .then(async res => {
//         if (
//           res.status === 200
//           // &&
//           // res?.data?.message === 'Withdrawal Otp sent on your email.'
//         ) {
//           await dispatch(
//             setSnackAlert(
//               res?.data?.message || 'Something went wrong. Please try again.',
//             ),
//           );
//           await dispatch({
//             type: POST_WITHDRAW_AMOUNT_SUCCESS,
//             payload: res.data,
//           });
//           if (submitForOTP) {
//             navigation.navigate('WalletTransactionHistory', {
//               walletItem,
//               totalAvailableBalance,
//             });
//           }
//         } else {
//           dispatch({
//             type: POST_WITHDRAW_AMOUNT_FAILURE,
//             payload: {},
//           });
//           dispatch(
//             setSnackAlert(
//               res?.data?.message || 'Something went wrong. Please try again.',
//             ),
//           );
//         }
//       })
//       .catch(err => {
//         dispatch({
//           type: POST_WITHDRAW_AMOUNT_FAILURE,
//           payload: err,
//         });
//         dispatch(setSnackAlert('Something went wrong. Please try again.'));
//       });
//   };
// };

const clearWithDrawAmount = () => {
  return async dispatch => {
    await dispatch({
      type: CLEAR_WITHDRAW_AMOUNT,
      payload: {},
    });
  };
};

const clearWithDrawAmountAllCoins = () => {
  return async dispatch => {
    await dispatch({
      type: CLEAR_WITHDRAW_AMOUNT_ALL_COINS,
      payload: {},
    });
  };
};

const getAddressForCoin = coinName => {
  return async dispatch => {
    dispatch({
      type: GET_ADDRESS_FOR_COIN,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(`${API.GET_COIN_ADDRESS}/${coinName}`, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_ADDRESS_FOR_COIN_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_ADDRESS_FOR_COIN_FAILURE,
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
          type: GET_ADDRESS_FOR_COIN_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

export {
  getWalletData,
  getAccountDetails,
  addDepositAmount,
  getWithDrawFee,
  withDrawAmount,
  getInOrderData,
  getINRDepositTransactionHistory,
  getINRWithdrawTransactionHistory,
  getDepositTransactionHistory,
  getWithdrawTransactionHistory,
  getBankDetailsForWallet,
  clearWithDrawAmount,
  getAddressForCoin,
  clearWithDrawAmountAllCoins,
  withDrawAmountAllCoins,
};
