import {
  WORKS_REQUEST,
  WORKS_REQUEST_SUCCESS,
  APP_SETTINGS_REQUEST,
  APP_SETTINGS_REQUEST_SUCCESS,
  HANDLE_ERROR
} from "../ActionTypes";

import getAllWorks from "../api/getAllWorks";
import getAppSettings from "../api/getAppSettings";

export const GetWorks = () => (dispatch, getState) => {
  dispatch({ type: WORKS_REQUEST });

  getAllWorks
    .then(res => dispatch({ type: WORKS_REQUEST_SUCCESS, payload: res }))
    .catch(error => dispatch({ type: HANDLE_ERROR, payload: error }));
};

export const GetPageSettings = () => (dispatch, getState) => {
  dispatch({ type: APP_SETTINGS_REQUEST });

  getAppSettings
    .then(res => dispatch({ type: APP_SETTINGS_REQUEST_SUCCESS, payload: res }))
    .catch(error => dispatch({ type: HANDLE_ERROR, payload: error }));
};
