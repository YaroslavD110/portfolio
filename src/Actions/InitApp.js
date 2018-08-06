import {
  WORKS_DATA_REQUEST,
  WORKS_DATA_REQUEST_SUCCESS,
  APP_SETTINGS_REQUEST,
  APP_SETTINGS_REQUEST_SUCCESS,
  HANDLE_ERROR
} from "../ActionTypes";

import getAllWorksData from "../api/getAllWorksData";
import getAppSettings from "../api/getAppSettings";

export const GetWorksData = () => (dispatch, getState) => {
  dispatch({ type: WORKS_DATA_REQUEST });

  getAllWorksData
    .then(res => dispatch({ type: WORKS_DATA_REQUEST_SUCCESS, payload: res }))
    .catch(error => dispatch({ type: HANDLE_ERROR, payload: error }));
};

export const GetPageSettings = () => (dispatch, getState) => {
  dispatch({ type: APP_SETTINGS_REQUEST });

  getAppSettings
    .then(res => dispatch({ type: APP_SETTINGS_REQUEST_SUCCESS, payload: res }))
    .catch(error => dispatch({ type: HANDLE_ERROR, payload: error }));
};
