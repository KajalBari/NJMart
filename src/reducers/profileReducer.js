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
  POST_PROFILE_IMAGE_SUCCESS,
  POST_PROFILE_IMAGE_FAILURE,
  GET_PROFILE_DATA,
  GET_PROFILE_DATA_SUCCESS,
  GET_PROFILE_DATA_FAILURE,
} from '../actions/actionTypes';

const INIT_STATE = {
  bankDetails: [],
  kycDetails: {},
  kycDetailsLoading: false,
  bankDetailsLoading: false,
  ifscCodeBankDetails: {},
  ifscCodeBankDetailsLoading: false,
  profileImageData: {},
  getProfileData: {},
  getProfileDataLoading: false,
};

const profileReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_BANK_DETAILS:
      return {
        ...state,
        bankDetailsLoading: true,
      };
    case ADD_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        bankDetailsLoading: false,
      };
    case ADD_BANK_DETAILS_FAILURE:
      return {
        ...state,
        bankDetailsLoading: false,
      };
    case GET_BANK_DETAILS:
      return {
        ...state,
        bankDetails: [],
        bankDetailsLoading: true,
      };
    case GET_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        bankDetails: action.payload || [],
        bankDetailsLoading: false,
      };
    case GET_BANK_DETAILS_FAILURE:
      return {
        ...state,
        bankDetails: [],
        bankDetailsLoading: false,
      };
    case DELETE_BANK_DETAILS:
      return {
        ...state,
        bankDetailsLoading: true,
      };
    case DELETE_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        bankDetailsLoading: false,
      };
    case DELETE_BANK_DETAILS_FAILURE:
      return {
        ...state,
        bankDetailsLoading: false,
      };
    case ADD_KYC_DETAILS:
      return {
        ...state,
        kycDetailsLoading: true,
      };
    case ADD_KYC_DETAILS_SUCCESS:
      return {
        ...state,
        kycDetailsLoading: false,
      };
    case ADD_KYC_DETAILS_FAILURE:
      return {
        ...state,
        kycDetailsLoading: false,
      };
    case GET_KYC_DETAILS:
      return {
        ...state,
        kycDetails: {},
        kycDetailsLoading: true,
      };
    case GET_KYC_DETAILS_SUCCESS:
      return {
        ...state,
        kycDetails: action.payload || [],
        kycDetailsLoading: false,
      };
    case GET_KYC_DETAILS_FAILURE:
      return {
        ...state,
        kycDetails: {},
        kycDetailsLoading: false,
      };
    case GET_IFSC_CODE_BANK_DETAILS:
      return {
        ...state,
        ifscCodeBankDetails: {},
        ifscCodeBankDetailsLoading: true,
      };
    case GET_IFSC_CODE_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        ifscCodeBankDetails:
          action?.payload?.length > 0 ? action.payload[0] : {},
        ifscCodeBankDetailsLoading: false,
      };
    case GET_IFSC_CODE_BANK_DETAILS_FAILURE:
      return {
        ...state,
        ifscCodeBankDetails: {},
        ifscCodeBankDetailsLoading: false,
      };
    case CLEAR_IFSC_CODE_BANK_DETAILS:
      return {
        ...state,
        ifscCodeBankDetails: {},
        ifscCodeBankDetailsLoading: false,
      };
    case POST_PROFILE_IMAGE:
      return {
        ...state,
        profileImageData: {},
      };
    case POST_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        profileImageData: action.payload,
      };
    case POST_PROFILE_IMAGE_FAILURE: {
      return {
        ...state,
        profileImageData: {},
      };
    }
    case GET_PROFILE_DATA:
      return {
        ...state,
        getProfileData: {},
        getProfileDataLoading: true,
      };
    case GET_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        getProfileData: action.payload,
        getProfileDataLoading: false,
      };
    case GET_PROFILE_DATA_FAILURE: {
      return {
        ...state,
        getProfileData: action.payload,
        getProfileDataLoading: false,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
