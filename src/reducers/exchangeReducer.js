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
  POST_EXCHANGE_ALL_COINS_BUY,
  POST_EXCHANGE_ALL_COINS_BUY_SUCCESS,
  POST_EXCHANGE_ALL_COINS_BUY_FAILURE,
  POST_EXCHANGE_ALL_COINS_SELL,
  POST_EXCHANGE_ALL_COINS_SELL_SUCCESS,
  POST_EXCHANGE_ALL_COINS_SELL_FAILURE,
  EXCHANGE_ORDER_WEB_SOCKET,
  EXCHANGE_ORDER_WEB_SOCKET_SUCCESS,
  EXCHANGE_ORDER_WEB_SOCKET_FAILURE,
} from '../actions/actionTypes';

const INIT_STATE = {
  coinsMarketData: [],
  exchangeScreenLoading: false,
  coinDataExchangeOrder: {},
  exchangeOrderLoading: false,
  orderBookBuyData: [],
  orderBookBuyDataLoading: false,
  orderBookSellData: [],
  orderBookSellDataLoading: false,
  marketTradesData: [],
  marketTradesDataLoading: false,
  allCoinsBalanceData: {},
  allCoinsBalanceDataLoading: false,
};

const exchangeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MARKET_DATA_OF_COIN:
      return {
        ...state,
        coinsMarketData: [],
        exchangeScreenLoading: true,
      };
    case GET_MARKET_DATA_OF_COIN_SUCCESS:
      return {
        ...state,
        coinsMarketData: action.payload,
        exchangeScreenLoading: false,
      };
    case GET_MARKET_DATA_OF_COIN_FAILURE:
      return {
        ...state,
        coinsMarketData: [],
        exchangeScreenLoading: false,
      };
    case GET_EXCHANGE_ORDER_DATA_FOR_COIN:
      return {
        ...state,
        coinDataExchangeOrder: {},
        exchangeOrderLoading: true,
      };
    case GET_EXCHANGE_ORDER_DATA_FOR_COIN_SUCCESS:
      return {
        ...state,
        coinDataExchangeOrder: action.payload,
        exchangeOrderLoading: false,
      };
    case GET_EXCHANGE_ORDER_DATA_FOR_COIN_FAILURE:
      return {
        ...state,
        coinDataExchangeOrder: {},
        exchangeOrderLoading: false,
      };
    case GET_ORDER_BOOK_BUY_DATA:
      return {
        ...state,
        orderBookBuyData: [],
        orderBookBuyDataLoading: true,
      };
    case GET_ORDER_BOOK_BUY_DATA_SUCCESS:
      return {
        ...state,
        orderBookBuyData: action.payload,
        orderBookBuyDataLoading: false,
      };
    case GET_ORDER_BOOK_BUY_DATA_FAILURE:
      return {
        ...state,
        orderBookBuyData: [],
        orderBookBuyDataLoading: false,
      };
    case GET_ORDER_BOOK_SELL_DATA:
      return {
        ...state,
        orderBookSellData: [],
        orderBookSellDataLoading: true,
      };
    case GET_ORDER_BOOK_SELL_DATA_SUCCESS:
      return {
        ...state,
        orderBookSellData: action.payload,
        orderBookSellDataLoading: false,
      };
    case GET_ORDER_BOOK_SELL_DATA_FAILURE:
      return {
        ...state,
        orderBookSellData: [],
        orderBookSellDataLoading: false,
      };
    case GET_MARKET_TRADES_DATA:
      return {
        ...state,
        marketTradesData: [],
        marketTradesDataLoading: true,
      };
    case GET_MARKET_TRADES_DATA_SUCCESS:
      return {
        ...state,
        marketTradesData: action.payload,
        marketTradesDataLoading: false,
      };
    case GET_MARKET_TRADES_DATA_FAILURE:
      return {
        ...state,
        marketTradesData: [],
        marketTradesDataLoading: false,
      };
    case GET_ALL_COINS_BALANCE:
      return {
        ...state,
        allCoinsBalanceData: {},
        allCoinsBalanceDataLoading: true,
      };
    case GET_ALL_COINS_BALANCE_SUCCESS:
      return {
        ...state,
        allCoinsBalanceData: action.payload,
        allCoinsBalanceDataLoading: false,
      };
    case GET_ALL_COINS_BALANCE_FAILURE:
      return {
        ...state,
        allCoinsBalanceData: {},
        allCoinsBalanceDataLoading: false,
      };
    case POST_EXCHANGE_ALL_COINS_BUY:
      return {
        ...state,
        allCoinsBalanceDataLoading: true,
      };
    case POST_EXCHANGE_ALL_COINS_BUY_SUCCESS:
      return {
        ...state,
        allCoinsBalanceDataLoading: false,
      };
    case POST_EXCHANGE_ALL_COINS_BUY_FAILURE:
      return {
        ...state,
        allCoinsBalanceDataLoading: false,
      };
    case POST_EXCHANGE_ALL_COINS_SELL:
      return {
        ...state,
        allCoinsBalanceDataLoading: true,
      };
    case POST_EXCHANGE_ALL_COINS_SELL_SUCCESS:
      return {
        ...state,
        allCoinsBalanceDataLoading: false,
      };
    case POST_EXCHANGE_ALL_COINS_SELL_FAILURE:
      return {
        ...state,
        allCoinsBalanceDataLoading: false,
      };
    case EXCHANGE_ORDER_WEB_SOCKET:
      return {
        ...state,
        orderBookBuyData: [],
        orderBookBuyDataLoading: true,
        orderBookSellData: [],
        orderBookSellDataLoading: true,
        marketTradesData: [],
        marketTradesDataLoading: true,
      };
    case EXCHANGE_ORDER_WEB_SOCKET_SUCCESS:
      return {
        ...state,
        orderBookBuyData:
          action?.payload?.buyOrder?.length > 0
            ? action?.payload?.buyOrder
            : [],
        orderBookBuyDataLoading: false,
        orderBookSellData:
          action?.payload?.sellOrder?.length > 0
            ? action?.payload?.sellOrder
            : [],
        orderBookSellDataLoading: false,
        marketTradesData:
          action?.payload?.trade?.length > 0 ? action?.payload?.trade : [],
        marketTradesDataLoading: false,
      };
    case EXCHANGE_ORDER_WEB_SOCKET_FAILURE:
      return {
        ...state,
        orderBookBuyData: [],
        orderBookBuyDataLoading: false,
        orderBookSellData: [],
        orderBookSellDataLoading: false,
        marketTradesData: [],
        marketTradesDataLoading: false,
      };
    default:
      return state;
  }
};

export default exchangeReducer;
