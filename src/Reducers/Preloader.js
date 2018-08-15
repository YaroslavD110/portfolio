import { HIDE_PAGE_PRELOADER, SHOW_PAGE_PRELOADER } from "../ActionTypes";

const initialState = {
  showPagePreloader: true
};

export default (state = initialState, { type }) => {
  switch (type) {
    case HIDE_PAGE_PRELOADER:
      return { ...state, showPagePreloader: false };
    case SHOW_PAGE_PRELOADER:
      return { ...state, showPagePreloader: true };
    default:
      return state;
  }
};
