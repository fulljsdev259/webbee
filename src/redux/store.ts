import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import persistState from "redux-localstorage";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//dynamic url based on environment to be passed after getting proper url currently dummy url for testing
const middleware = [sagaMiddleware].filter(Boolean);

const middleWareEnhancer = applyMiddleware(...middleware);

const enhancer = compose(middleWareEnhancer, persistState() as any);

// mount it on the Store
export const store = createStore(rootReducer, enhancer);

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
