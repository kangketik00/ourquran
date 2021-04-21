import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// it's will persist with local storage so when refresh the data won't disappeared
// persisted version of store
export const persistor = persistStore(store);
