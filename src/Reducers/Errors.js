import { HANDLE_ERROR } from "../ActionTypes";

const initialState = {
  isGlobalError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_ERROR:
      return {
        ...state,
        isGlobalError: true,
        TypeError: payload
      };
    default:
      return state;
  }
};
