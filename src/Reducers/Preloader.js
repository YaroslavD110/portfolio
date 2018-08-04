import {
  HIDE_PAGE_PRELOADER,
  SHOW_CONTENT_PRELOADER,
  HIDE_CONTENT_PRELOADER
} from "../ActionTypes";

const initialState = {
  showPagePreloader: true,
  showContentPreloader: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case HIDE_PAGE_PRELOADER:
      return { ...state, showPagePreloader: false };
    case SHOW_CONTENT_PRELOADER:
      return { ...state, showContentPreloader: true };
    case HIDE_CONTENT_PRELOADER:
      return { ...state, showContentPreloader: false };
    default:
      return state;
  }
};
