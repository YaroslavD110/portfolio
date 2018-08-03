import { INIT_REQUEST, INIT_REQUEST_SUCCESS } from "../ActionTypes";

export default (state = [], { type, payload }) => {
  switch (type) {
    case INIT_REQUEST:
      return state;
    case INIT_REQUEST_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
