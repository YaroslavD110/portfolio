import {
  APP_SETTINGS_REQUEST,
  APP_SETTINGS_REQUEST_SUCCESS
} from "../ActionTypes";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case APP_SETTINGS_REQUEST:
      return state;
    case APP_SETTINGS_REQUEST_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
