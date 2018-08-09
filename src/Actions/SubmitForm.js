import {
  SENDING_MAIL_START,
  SENDING_MAIL_SUCCESS,
  SENDING_MAIL_FAILED
} from "../ActionTypes";

import sendMail from "../api/sendMail";

export default mail => (dispatch, getState) => {
  dispatch({
    type: SENDING_MAIL_START,
    payload: { name: mail.name, isShowPreloader: true }
  });

  sendMail(mail)
    .then(res =>
      dispatch({
        type: SENDING_MAIL_SUCCESS,
        payload: { message: res, isShowPreloader: false }
      })
    )
    .catch(err =>
      dispatch({
        type: SENDING_MAIL_FAILED,
        payload: { message: err, isShowPreloader: false }
      })
    );
};
