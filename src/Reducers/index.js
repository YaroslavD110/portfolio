import { combineReducers } from "redux";

import WorksData from "./WorksData";
import Preloader from "./Preloader";
import AppSettings from "./AppSettings";
import Errors from "./Errors";

export default combineReducers({ WorksData, Preloader, AppSettings, Errors });
