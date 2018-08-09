import {
  SENDING_MAIL_START,
  SENDING_MAIL_SUCCESS,
  SENDING_MAIL_FAILED
} from "../ActionTypes";

const initialState = {
  name: "Гість",
  message: "Шось пішло не так :(",
  isShowPreloader: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SENDING_MAIL_START:
      return {
        ...state,
        ...payload
      };
    case SENDING_MAIL_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case SENDING_MAIL_FAILED:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
