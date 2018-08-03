import {
  INIT_REQUEST,
  INIT_REQUEST_SUCCESS,
  HANDLE_ERROR
} from "../ActionTypes";

import getAllWorks from "../api/getAllWorks";

export const InitApp = () => (dispatch, getState) => {
  dispatch({ type: INIT_REQUEST });

  getAllWorks
    .then(res => dispatch({ type: INIT_REQUEST_SUCCESS, payload: res }))
    .catch(error =>
      dispatch({
        type: HANDLE_ERROR,
        payload: {
          errorType: error
        }
      })
    );
};
