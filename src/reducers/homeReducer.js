import {
  GET_MARKET_DATA,
  GET_MARKET_DATA_SUCCESS,
  GET_MARKET_DATA_FAILURE,
} from '../actions/actionTypes';

const INIT_STATE = {
  allCoinsMarketData: [],
  homeScreenLoading: false,
};

const homeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MARKET_DATA:
      return {
        ...state,
        allCoinsMarketData: [],
        homeScreenLoading: true,
      };
    case GET_MARKET_DATA_SUCCESS:
      return {
        ...state,
        allCoinsMarketData: action.payload,
        homeScreenLoading: false,
      };
    case GET_MARKET_DATA_FAILURE:
      return {
        ...state,
        allCoinsMarketData: [],
        homeScreenLoading: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
