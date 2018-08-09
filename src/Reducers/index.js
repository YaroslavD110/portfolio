import { combineReducers } from "redux";

import WorksData from "./WorksData";
import Preloader from "./Preloader";
import AppSettings from "./AppSettings";
import Email from "./Email";
import Errors from "./Errors";

export default combineReducers({
  WorksData,
  Preloader,
  AppSettings,
  Email,
  Errors
});
