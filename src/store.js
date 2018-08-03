import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./Reducers";

export default createStore(rootReducer, applyMiddleware(thunk, logger));
