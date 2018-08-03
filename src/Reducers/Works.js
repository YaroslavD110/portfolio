import {
  INIT_REQUEST,
  INIT_REQUEST_SUCCESS,
  INIT_REQUEST_FILED
} from "../ActionTypes";

export default (state = [], { type, payload }) => {
  switch (type) {
    case INIT_REQUEST:
      return state;
    case INIT_REQUEST_SUCCESS:
      return [...state, ...payload];
    case INIT_REQUEST_FILED:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
