import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//dynamic url based on environment to be passed after getting proper url currently dummy url for testing
const middleware = [sagaMiddleware].filter(
    Boolean
  );

// mount it on the Store
export const store = createStore(rootReducer, applyMiddleware(...middleware));

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application