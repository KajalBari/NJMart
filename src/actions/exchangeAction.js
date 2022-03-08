import {
  GET_MARKET_DATA_OF_COIN,
  GET_MARKET_DATA_OF_COIN_SUCCESS,
  GET_MARKET_DATA_OF_COIN_FAILURE,
  GET_EXCHANGE_ORDER_DATA_FOR_COIN,
  GET_EXCHANGE_ORDER_DATA_FOR_COIN_SUCCESS,
  GET_EXCHANGE_ORDER_DATA_FOR_COIN_FAILURE,
  GET_ORDER_BOOK_BUY_DATA,
  GET_ORDER_BOOK_BUY_DATA_SUCCESS,
  GET_ORDER_BOOK_BUY_DATA_FAILURE,
  GET_ORDER_BOOK_SELL_DATA,
  GET_ORDER_BOOK_SELL_DATA_SUCCESS,
  GET_ORDER_BOOK_SELL_DATA_FAILURE,
  GET_MARKET_TRADES_DATA,
  GET_MARKET_TRADES_DATA_SUCCESS,
  GET_MARKET_TRADES_DATA_FAILURE,
  GET_ALL_COINS_BALANCE,
  GET_ALL_COINS_BALANCE_SUCCESS,
  GET_ALL_COINS_BALANCE_FAILURE,
  POST_EXCHANGE_ALL_COINS_BUY_SUCCESS,
  POST_EXCHANGE_ALL_COINS_BUY_FAILURE,
  POST_EXCHANGE_ALL_COINS_BUY,
  POST_EXCHANGE_ALL_COINS_SELL,
  POST_EXCHANGE_ALL_COINS_SELL_SUCCESS,
  POST_EXCHANGE_ALL_COINS_SELL_FAILURE,
} from './actionTypes';
import {axiosGetWithToken, axiosPostWithToken} from '../services/apiServices';
import {API} from '../config/api';
import store from '../services/storageServices';
import {setSnackAlert} from './commonActions';

const getMarketDataOfCoin = coin => {
  return async dispatch => {
    dispatch({
      type: GET_MARKET_DATA_OF_COIN,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(
      `${API.GET_MARKET_DATA_POST_LOGIN}/${coin || 'INR'}/1`,
      token,
    )
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_MARKET_DATA_OF_COIN_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_MARKET_DATA_OF_COIN_FAILURE,
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
          type: GET_MARKET_DATA_OF_COIN_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getExchangeOrderDataForCoin = (normalCoinId, baseCoinId) => {
  return async dispatch => {
    dispatch({
      type: GET_EXCHANGE_ORDER_DATA_FOR_COIN,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(`${API.GET_EXCHANGE_ORDER_DATA_FOR_COIN}`, token)
      .then(async res => {
        if (res.status === 200) {
          const coinData =
            res?.data?.length > 0
              ? res.data.find(
                  coin =>
                    coin?.normalCoinId === normalCoinId &&
                    coin?.baseCoinId === baseCoinId,
                )
              : {};
          await dispatch({
            type: GET_EXCHANGE_ORDER_DATA_FOR_COIN_SUCCESS,
            payload: coinData,
          });
        } else {
          dispatch({
            type: GET_EXCHANGE_ORDER_DATA_FOR_COIN_FAILURE,
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
          type: GET_EXCHANGE_ORDER_DATA_FOR_COIN_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getOrderBookBuyData = (normalCoinShort, baseCoinShort) => {
  return async dispatch => {
    dispatch({
      type: GET_ORDER_BOOK_BUY_DATA,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(
      `${API.GET_ORDER_BOOK_BUY_DATA}/${normalCoinShort}/${baseCoinShort}`,
      token,
    )
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_ORDER_BOOK_BUY_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_ORDER_BOOK_BUY_DATA_FAILURE,
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
          type: GET_ORDER_BOOK_BUY_DATA_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getOrderBookSellData = (normalCoinShort, baseCoinShort) => {
  return async dispatch => {
    dispatch({
      type: GET_ORDER_BOOK_SELL_DATA,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(
      `${API.GET_ORDER_BOOK_SELL_DATA}/${normalCoinShort}/${baseCoinShort}`,
      token,
    )
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_ORDER_BOOK_SELL_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_ORDER_BOOK_SELL_DATA_FAILURE,
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
          type: GET_ORDER_BOOK_SELL_DATA_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getMarketTradesData = (normalCoinShort, baseCoinShort) => {
  return async dispatch => {
    dispatch({
      type: GET_MARKET_TRADES_DATA,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(
      `${API.GET_MARKET_TRADES_DATA}/${normalCoinShort}/${baseCoinShort}`,
      token,
    )
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_MARKET_TRADES_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_MARKET_TRADES_DATA_FAILURE,
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
          type: GET_MARKET_TRADES_DATA_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const getAllCoinsBalance = (normalCoinShort, baseCoinShort) => {
  return async dispatch => {
    dispatch({
      type: GET_ALL_COINS_BALANCE,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosGetWithToken(`${API.GET_ALL_COINS_BALANCE}`, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: GET_ALL_COINS_BALANCE_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_ALL_COINS_BALANCE_FAILURE,
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
          type: GET_ALL_COINS_BALANCE_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const postExchangeAllCoinsBuy = (body, navigation, coinDataExchangeOrder) => {
  return async dispatch => {
    dispatch({
      type: POST_EXCHANGE_ALL_COINS_BUY,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosPostWithToken(API.POST_EXCHANGE_ALL_COINS_BUY, body, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: POST_EXCHANGE_ALL_COINS_BUY_SUCCESS,
            payload: res.data,
          });
          navigation.navigate('ExchangeOrder', {
            coinData: coinDataExchangeOrder,
          });
        } else {
          dispatch({
            type: POST_EXCHANGE_ALL_COINS_BUY_FAILURE,
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
          type: POST_EXCHANGE_ALL_COINS_BUY_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

const postExchangeAllCoinsSell = (body, navigation, coinDataExchangeOrder) => {
  return async dispatch => {
    dispatch({
      type: POST_EXCHANGE_ALL_COINS_SELL,
      payload: {},
    });
    const userData = await store.get('userData');
    const token = userData?.jwtToken;

    axiosPostWithToken(API.POST_EXCHANGE_ALL_COINS_SELL, body, token)
      .then(async res => {
        if (res.status === 200) {
          await dispatch({
            type: POST_EXCHANGE_ALL_COINS_SELL_SUCCESS,
            payload: res.data,
          });
          navigation.navigate('ExchangeOrder', {
            coinData: coinDataExchangeOrder,
          });
        } else {
          dispatch({
            type: POST_EXCHANGE_ALL_COINS_SELL_FAILURE,
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
          type: POST_EXCHANGE_ALL_COINS_SELL_FAILURE,
          payload: err,
        });
        dispatch(setSnackAlert('Something went wrong. Please try again.'));
      });
  };
};

export {
  getMarketDataOfCoin,
  getExchangeOrderDataForCoin,
  getOrderBookBuyData,
  getOrderBookSellData,
  getMarketTradesData,
  getAllCoinsBalance,
  postExchangeAllCoinsBuy,
  postExchangeAllCoinsSell,
};
