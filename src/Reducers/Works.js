import { WORKS_REQUEST, WORKS_REQUEST_SUCCESS } from "../ActionTypes";

export default (state = [], { type, payload }) => {
  switch (type) {
    case WORKS_REQUEST:
      return state;
    case WORKS_REQUEST_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
