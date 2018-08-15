import { HIDE_PAGE_PRELOADER, SHOW_PAGE_PRELOADER } from "../ActionTypes";

export const hidePreloader = () => ({
  type: HIDE_PAGE_PRELOADER
});

export const showPreloader = () => ({
  type: SHOW_PAGE_PRELOADER
});
