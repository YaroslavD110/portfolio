import {
  INIT_REQUEST,
  INIT_REQUEST_SUCCESS,
  INIT_REQUEST_FILED
} from "../ActionTypes";

import getAllWorks from "../api/getAllWorks";

export const InitApp = () => (dispatch, getState) => {
  dispatch({ type: INIT_REQUEST });

  getAllWorks
    .then(res =>
      dispatch({
        type: INIT_REQUEST_SUCCESS,
        payload: res
      })
    )
    .catch(error =>
      dispatch({
        type: INIT_REQUEST_FILED,
        payload: {
          errorType: error
        }
      })
    );
};
