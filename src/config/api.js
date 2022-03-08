const PRODBASEURL = 'https://be.blockaitech.com';
const prodAuthenticate = `${PRODBASEURL}/accounts`;
const prodBankDetails = `${PRODBASEURL}/api/bank_details`;
const prodKYCDetails = `${PRODBASEURL}/api/KYC_Details`;
const prodReportDetails = `${PRODBASEURL}/api/Report`;
const prodSupport = `${PRODBASEURL}/api/TicketSystem`;
const prodCurrencies = `${PRODBASEURL}/api/currencies`;
const prodinrBankDetails = `${PRODBASEURL}/api/InrBankDetails`;
const prodwithDraw = `${PRODBASEURL}/api/ErcTwenty`;
const prodB2Broker = `${PRODBASEURL}/api/B2Broker`;
const prodAjax = `${PRODBASEURL}/api/Ajax`;
const prodCoinAddress = `${PRODBASEURL}/api/B2Broker`;
const prodWebSocket = `${PRODBASEURL}/ws`;
const prodReferral = `${PRODBASEURL}/api/RefferalRewards`;
const prodReward = `${PRODBASEURL}/api/RewardHistories`;
const prodBaseMarket = `${PRODBASEURL}/api/basemarkets`;
export const BaseAuthenticateURL = prodAuthenticate;
export const BaseBankDetailsURL = prodBankDetails;
export const BaseReportURL = prodReportDetails;
export const BaseKyURL = prodKYCDetails;
export const BaseSupportURL = prodSupport;
export const BaseCurrenciesURL = prodCurrencies;
export const BaseINRBankDetails = prodinrBankDetails;
export const BaseDepositAmount = prodBankDetails;
export const BaseWithDrawFee = prodCurrencies;
export const BaseWithDraw = prodwithDraw;
export const BaseB2Broker = prodB2Broker;
export const BaseAjaxURL = prodAjax;
export const BaseCoinAddress = prodCoinAddress;
export const BaseWebSocketConnect = prodWebSocket;
export const referralUrl = prodReferral;
export const rewardUrl = prodReward;
export const baseMarketUrl = prodBaseMarket;

export const API = {
  REGISTER_USER: `${BaseAuthenticateURL}/register`,
  AUTHENTICATE_USER: `${BaseAuthenticateURL}/authenticate`,
  REFRESH_TOKEN: `${BaseAuthenticateURL}/refresh-token`,
  FORGOT_PASSWORD: `${BaseAuthenticateURL}/forgot-password`,
  CHANGE_PASSWORD: `${BaseAuthenticateURL}/change-password`,
  LOGOUT: `${BaseAuthenticateURL}/revoke-token`,
  ADD_BANK_DETAILS: `${BaseBankDetailsURL}/Postbank_details`,
  GET_BANK_DETAILS: `${BaseBankDetailsURL}/GetBankDetailsList`,
  DELETE_BANK_DETAILS: `${BaseBankDetailsURL}/Deletebank_details`,
  GET_MARKET_DATA: `${BaseReportURL}/GetOpenValueFromChartsData/null/null`,
  GET_MARKET_DATA_PRE_LOGIN: `${BaseReportURL}/GetMarketDataForAll/null/null`,
  GET_MARKET_DATA_POST_LOGIN: `${BaseReportURL}/GetDataForMarketPage`,
  ADD_KYC_DETAILS: `${BaseKyURL}/PostKYC_Details`,
  GET_KYC_STATUS: `${BaseKyURL}/GetVerifiedKycDataForUser`,
  GET_IFSC_CODE_BANK_DETAILS: `${BaseBankDetailsURL}/GetAddressOnSerachingIfsc`,
  SUPPORT_USER: `${BaseSupportURL}/PostTicket`,
  SUPPORT_USER_GET: `${BaseSupportURL}/GetTicket`,
  SUPPORT_USER_GET_VIEW_DETAILS: `${BaseSupportURL}/GetReplyOnTicket`,
  GET_WALLET_DATA: `${BaseCurrenciesURL}/GetCurrenciesWithBalance`,
  GET_ACCOUNTDETAILS: `${BaseINRBankDetails}/GetInrBankDetails`,
  GET_BANKS_LIST: `${BaseBankDetailsURL}/GetBankName`,
  POST_DEPOSIT_AMOUNT: `${BaseDepositAmount}/AddManualInrDeposit`,
  GET_WITHDRAW_FEE: `${BaseWithDrawFee}`,
  POST_WITHDRAW: `${BaseWithDraw}/InrWithdrawal`,
  GET_INORDER_DATA: `${BaseCurrenciesURL}/GetInOrderData`,
  GET_INR_DEPOSIT_TRANSACTION_HISTORY: `${BaseBankDetailsURL}/GetInrDepositListForUser`,
  GET_INR_WITHDRAW_TRANSACTION_HISTORY: `${BaseReportURL}/GetInrWithdraWhistory`,
  GET_DEPOSIT_TRANSACTION_HISTORY: `${BaseAjaxURL}/GetDepositeHistory`,
  GET_COIN_ADDRESS: `${BaseCoinAddress}/GetAddress`,
  GET_WITHDRAW_TRANSACTION_HISTORY: `${BaseAjaxURL}/GetWithdraWhistory`,
  POST_ALL_COINS_WITHDRAW: `${BaseWithDraw}/Withdrawal`,
  GET_EXCHANGE_ORDER_DATA_FOR_COIN: `${BaseReportURL}/GetOpenValueFromChartsData/null/null`,
  GET_ORDER_BOOK_BUY_DATA: `${BaseAjaxURL}/GetBuyOrder`,
  GET_ORDER_BOOK_SELL_DATA: `${BaseAjaxURL}/GetSellOrder`,
  GET_MARKET_TRADES_DATA: `${BaseAjaxURL}/GetTradeHistory`,
  GET_ALL_COINS_BALANCE: `${BaseAjaxURL}/GetBalance`,
  POST_EXCHANGE_ALL_COINS_BUY: `${BaseAjaxURL}/BuyOrder`,
  POST_EXCHANGE_ALL_COINS_SELL: `${BaseAjaxURL}/SellOrder`,
  WEBSOCKET_CONNECT: `${BaseWebSocketConnect}/trade`,
  GET_DEPOSITWITHDRAW: `${BaseCurrenciesURL}`,
  GET_REFERRAL: `${BaseAjaxURL}/GetReffreal`,
  GET_REFERRAL_HISTORY: `${referralUrl}/GetRefferalHostoryReport`,
  GET_REWARD_HISTORY: `${rewardUrl}/GetRewardHistoryForUser`,
  GET_MARKET_PAIR: `${baseMarketUrl}/GetMarketPair`,
  POST_PROFILE_IMAGE: `${BaseAuthenticateURL}/UploadProfileImage`,
  GET_PROFILE_DATA: `${BaseAuthenticateURL}/GetProfileImage`,
  POST_APP_PASSCODE: `${BaseAuthenticateURL}/CreateMPin`,
  POST_NOTIFICATION_SETTINGS: `${BaseAjaxURL}/NotificationOnOff`,
  POST_WITHDRAW_ALL_COINS: `${BaseB2Broker}/Withdrawal`,
};
