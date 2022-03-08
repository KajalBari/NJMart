import {
  POST_NOTIFICATION_SETTINGS,
  POST_NOTIFICATION_SETTINGS_SUCCESS,
  POST_NOTIFICATION_SETTINGS_FAILURE,
} from '../actions/actionTypes';

const INIT_STATE = {
  postNotificationSettingsData: {},
  postNotificationSettingsLoading: false,
};

const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case POST_NOTIFICATION_SETTINGS:
      return {
        ...state,
        postNotificationSettingsData: {},
        postNotificationSettingsLoading: false,
      };
    case POST_NOTIFICATION_SETTINGS_SUCCESS:
      return {
        ...state,
        postNotificationSettingsData: action.payload,
        postNotificationSettingsLoading: false,
      };
    case POST_NOTIFICATION_SETTINGS_FAILURE:
      return {
        ...state,
        postNotificationSettingsData: {},
        postNotificationSettingsLoading: false,
      };

    default:
      return state;
  }
};

export default commonReducer;
