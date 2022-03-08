import {
  GET_WALLET_DATA,
  GET_WALLET_DATA_SUCCESS,
  GET_WALLET_DATA_FAILURE,
  GET_ACCOUNT_DETAILS,
  GET_ACCOUNT_DETAILS_SUCCESS,
  GET_ACCOUNT_DETAILS_FAILURE,
  POST_DEPOSIT_AMOUNT_FAILURE,
  POST_DEPOSIT_AMOUNT_SUCCESSS,
  POST_DEPOSIT_AMOUNT,
  GET_BANK_DETAILS_WALLET,
  GET_BANK_DETAILS_WALLET_SUCCESS,
  GET_BANK_DETAILS_WALLET_FAILURE,
  GET_WITHDRAW_FEE,
  SUPPORT_USER,
  GET_WITHDRAW_FEE_SUCCESS,
  GET_WITHDRAW_FEE_FAILURE,
  POST_WITHDRAW_OTP,
  POST_WITHDRAW_OTP_SUCCESS,
  POST_WITHDRAW_OTP_FAILURE,
  POST_WITHDRAW_AMOUNT_SUCCESS,
  POST_WITHDRAW_AMOUNT_FAILURE,
  POST_WITHDRAW_AMOUNT,
  CLEAR_WITHDRAW_AMOUNT,
  GET_INORDER_DATA,
  GET_INORDER_DATA_SUCCESS,
  GET_INORDER_DATA_FAILURE,
  GET_DEPOSIT_TRANSACTION_HISTORY,
  GET_DEPOSIT_TRANSACTION_HISTORY_SUCCESS,
  GET_DEPOSIT_TRANSACTION_HISTORY_FAILURE,
  GET_WITHDRAW_TRANSACTION_HISTORY,
  GET_WITHDRAW_TRANSACTION_HISTORY_SUCCESS,
  GET_WITHDRAW_TRANSACTION_HISTORY_FAILURE,
  GET_ADDRESS_FOR_COIN,
  GET_ADDRESS_FOR_COIN_SUCCESS,
  GET_ADDRESS_FOR_COIN_FAILURE,
  POST_WITHDRAW_AMOUNT_ALL_COINS,
  POST_WITHDRAW_AMOUNT_ALL_COINS_SUCCESS,
  POST_WITHDRAW_AMOUNT_ALL_COINS_FAILURE,
  CLEAR_WITHDRAW_AMOUNT_ALL_COINS,
} from '../actions/actionTypes';

const INIT_STATE = {
  walletData: [],
  inOrderData: [],
  depositTransactionHistory: [],
  withdrawTransactionHistory: [],
  walletDataLoading: false,
  accountData: {},
  accountdataLoading: false,
  bankListData: [],
  bankListDataLoading: false,
  depositDataLoading: false,
  withDrawFeeData: [],
  withDrawFeeLoading: false,
  withDrawAmountOTPLoading: false,
  withDrawAmountOTPSuccess: false,
  withDrawAmountSuccess: false,
  withDrawAmountLoading: false,
  withDrawAmountAllCoinsOTPLoading: false,
  withDrawAmountAllCoinsOTPSuccess: false,
  withDrawAmountAllCoinsSuccess: false,
  withDrawAmountAllCoinsLoading: false,
  transactionHistoryLoading: false,
  getAddressForCoin: {},
  getAddressForCoinLoading: false,
};

const walletReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WALLET_DATA:
      return {
        ...state,
        walletData: [],
        walletDataLoading: true,
      };
    case GET_WALLET_DATA_SUCCESS:
      return {
        ...state,
        walletData: action.payload,
        walletDataLoading: false,
      };
    case GET_WALLET_DATA_FAILURE:
      return {
        ...state,
        walletData: [],
        walletDataLoading: false,
      };
    case GET_BANK_DETAILS_WALLET:
      return {
        ...state,
        bankListData: [],
        bankListDataLoading: true,
      };
    case GET_BANK_DETAILS_WALLET_SUCCESS:
      return {
        ...state,
        bankListData: action.payload,
        bankListDataLoading: false,
      };
    case GET_BANK_DETAILS_WALLET_FAILURE:
      return {
        ...state,
        bankListData: [],
        bankListDataLoading: false,
      };
    case GET_ACCOUNT_DETAILS:
      return {
        ...state,
        accountData: {},
        accountdataLoading: true,
      };
    case GET_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        accountData: action.payload,
        accountdataLoading: false,
      };
    case GET_ACCOUNT_DETAILS_FAILURE:
      return {
        ...state,
        accountData: {},
        accountdataLoading: false,
      };
    case POST_DEPOSIT_AMOUNT:
      return {
        ...state,
        depositDataLoading: true,
      };
    case POST_DEPOSIT_AMOUNT_SUCCESSS:
      return {
        ...state,
        depositDataLoading: false,
      };
    case POST_DEPOSIT_AMOUNT_FAILURE:
      return {
        ...state,
        depositDataLoading: false,
      };
    case GET_WITHDRAW_FEE:
      return {
        ...state,
        withDrawFeeData: [],
        withDrawFeeLoading: true,
      };
    case GET_WITHDRAW_FEE_SUCCESS:
      return {
        ...state,
        withDrawFeeData: action.payload,
        withDrawFeeLoading: false,
      };
    case GET_WITHDRAW_FEE_FAILURE:
      return {
        ...state,
        withDrawFeeData: [],
        withDrawFeeLoading: false,
      };
    case POST_WITHDRAW_AMOUNT:
      return {
        ...state,
        withDrawAmountOTPLoading: true,
        withDrawAmountOTPSuccess: false,
        withDrawAmountSuccess: false,
      };
    case POST_WITHDRAW_AMOUNT_SUCCESS:
      return {
        ...state,
        withDrawAmountOTPLoading: false,
        withDrawAmountOTPSuccess: !action?.payload?.submitForOTP,
        withDrawAmountSuccess: action?.payload?.submitForOTP,
      };
    case POST_WITHDRAW_AMOUNT_FAILURE:
      return {
        ...state,
        withDrawAmountOTPLoading: false,
        withDrawAmountOTPSuccess: false,
        withDrawAmountSuccess: false,
      };
    case POST_WITHDRAW_AMOUNT_ALL_COINS:
      return {
        ...state,
        withDrawAmountAllCoinsOTPLoading: true,
        withDrawAmountAllCoinsOTPSuccess: false,
        withDrawAmountAllCoinsSuccess: false,
      };
    case POST_WITHDRAW_AMOUNT_ALL_COINS_SUCCESS:
      return {
        ...state,
        withDrawAmountAllCoinsOTPLoading: false,
        withDrawAmountAllCoinsOTPSuccess: !action?.payload?.submitForOTP,
        withDrawAmountAllCoinsSuccess: action?.payload?.submitForOTP,
      };
    case POST_WITHDRAW_AMOUNT_ALL_COINS_FAILURE:
      return {
        ...state,
        withDrawAmountAllCoinsOTPLoading: false,
        withDrawAmountAllCoinsOTPSuccess: false,
        withDrawAmountAllCoinsSuccess: false,
      };
    case CLEAR_WITHDRAW_AMOUNT:
      return {
        ...state,
        withDrawAmountOTPLoading: false,
        withDrawAmountOTPSuccess: false,
        withDrawAmountSuccess: false,
      };
    case CLEAR_WITHDRAW_AMOUNT_ALL_COINS:
      return {
        ...state,
        withDrawAmountAllCoinsOTPLoading: false,
        withDrawAmountAllCoinsOTPSuccess: false,
        withDrawAmountAllCoinsSuccess: false,
      };
    case GET_INORDER_DATA:
      return {
        ...state,
        inOrderData: [],
        walletDataLoading: true,
      };
    case GET_INORDER_DATA_SUCCESS:
      return {
        ...state,
        inOrderData: action.payload,
        walletDataLoading: false,
      };
    case GET_INORDER_DATA_FAILURE:
      return {
        ...state,
        inOrderData: [],
        walletDataLoading: false,
      };
    case GET_DEPOSIT_TRANSACTION_HISTORY:
      return {
        ...state,
        depositTransactionHistory: [],
        transactionHistoryLoading: true,
      };
    case GET_DEPOSIT_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        depositTransactionHistory: action.payload,
        transactionHistoryLoading: false,
      };
    case GET_DEPOSIT_TRANSACTION_HISTORY_FAILURE:
      return {
        ...state,
        depositTransactionHistory: [],
        transactionHistoryLoading: false,
      };
    case GET_WITHDRAW_TRANSACTION_HISTORY:
      return {
        ...state,
        withdrawTransactionHistory: [],
        transactionHistoryLoading: true,
      };
    case GET_WITHDRAW_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        withdrawTransactionHistory: action.payload,
        transactionHistoryLoading: false,
      };
    case GET_WITHDRAW_TRANSACTION_HISTORY_FAILURE:
      return {
        ...state,
        withdrawTransactionHistory: [],
        transactionHistoryLoading: false,
      };
    case GET_ADDRESS_FOR_COIN:
      return {
        ...state,
        getAddressForCoin: {},
        getAddressForCoinLoading: true,
      };
    case GET_ADDRESS_FOR_COIN_SUCCESS:
      return {
        ...state,
        getAddressForCoin: action.payload,
        getAddressForCoinLoading: false,
      };
    case GET_ADDRESS_FOR_COIN_FAILURE:
      return {
        ...state,
        getAddressForCoin: action.payload,
        getAddressForCoinLoading: false,
      };
    default:
      return state;
  }
};

export default walletReducer;
