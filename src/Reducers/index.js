import { combineReducers } from "redux";

import Works from "./Works";
import Preloader from "./Preloader";
import AppSettings from "./AppSettings";
import Error from "./Error";

export default combineReducers({ Works, Preloader, AppSettings, Error });
