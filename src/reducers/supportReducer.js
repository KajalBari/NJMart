import {
  SUPPORT_USER,
  SUPPORT_USER_SUCCESS,
  SUPPORT_USER_FAILURE,
  GET_SUPPORT_DETAILS,
  GET_SUPPORT_DETAILS_SUCCESS,
  GET_SUPPORT_DETAILS_FAILURE,
  SUPPORT_USER_GET_VIEW_DETAILS,
  SUPPORT_USER_GET_VIEW_DETAILS_SUCCESS,
  SUPPORT_USER_GET_VIEW_DETAILS_FAILURE,
} from '../actions/actionTypes';

const INIT_STATE = {
  userData: {},
  allRaisedTickets: [],
  supportUserLoading: false,
  supportUserSuccess: false,
  allSupportViewData: [],
  supportViewDetails: {},
  supportViewDetailsLoading: false,
};

const supportReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SUPPORT_USER:
      return {
        ...state,
        supportUserLoading: true,
        supportUserSuccess: false,
      };
    case SUPPORT_USER_SUCCESS:
      return {
        ...state,
        supportUserLoading: false,
        supportUserSuccess: true,
      };
    case SUPPORT_USER_FAILURE:
      return {
        ...state,
        supportUserLoading: false,
        supportUserSuccess: false,
      };
    case GET_SUPPORT_DETAILS:
      return {
        ...state,
        allRaisedTickets: [],
        supportUserLoading: true,
      };
    case GET_SUPPORT_DETAILS_SUCCESS:
      return {
        ...state,
        allRaisedTickets: action.payload || [],
        supportUserLoading: false,
      };
    case GET_SUPPORT_DETAILS_FAILURE:
      return {
        ...state,
        allRaisedTickets: [],
        supportUserLoading: false,
      };
    case SUPPORT_USER_GET_VIEW_DETAILS:
      return {
        ...state,
        allSupportViewData: [],
        supportViewDetailsLoading: true,
      };
    case SUPPORT_USER_GET_VIEW_DETAILS_SUCCESS:
      return {
        ...state,
        allSupportViewData: action.payload || [],
        supportViewDetailsLoading: false,
      };
    case SUPPORT_USER_GET_VIEW_DETAILS_FAILURE:
      return {
        ...state,
        allSupportViewData: [],
        supportViewDetailsLoading: false,
      };

    default:
      return state;
  }
};

export default supportReducer;
