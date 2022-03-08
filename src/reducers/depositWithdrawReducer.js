import {
  GET_DEPOSITWITHDRAW_FEE,
  GET_DEPOSITWITHDRAW_FEE_SUCCESS,
  GET_DEPOSITWITHDRAW_FEE_FAILURE
} from '../actions/actionTypes';

const INIT_STATE = {
  userData: {},
  depositWithdrawUserLoading: false,
  depositWithdrawUserSuccess: false,
  depositWithdrawViewDetails: {},
  depositWithdrawViewDetailsLoading: false,
  allDepositWithDrawFeesData: []
};

const depositWithdrawReducer = (state = INIT_STATE, action) => {
  switch (action.type) {    

    case GET_DEPOSITWITHDRAW_FEE:
      return {
        ...state,
        allDepositWithDrawFeesData: [],
        depositWithdrawUserLoading: true,
      };
    case GET_DEPOSITWITHDRAW_FEE_SUCCESS:
      return {
        ...state,
        allDepositWithDrawFeesData: action.payload || [],
        depositWithdrawUserLoading: false,
      };
    case GET_DEPOSITWITHDRAW_FEE_FAILURE:
      return {
        ...state,
        allDepositWithDrawFeesData: [],
        depositWithdrawUserLoading: false,
      };

    default:
      return state;
  }
};

export default depositWithdrawReducer;
