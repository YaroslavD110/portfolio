import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import indexReducer from "./Reducers";

const store = createStore(indexReducer, applyMiddleware(logger));

window.store = store;

export default store;