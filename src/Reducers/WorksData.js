import { WORKS_DATA_REQUEST, WORKS_DATA_REQUEST_SUCCESS } from "../ActionTypes";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case WORKS_DATA_REQUEST:
      return state;
    case WORKS_DATA_REQUEST_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
