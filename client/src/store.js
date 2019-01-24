import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import routeReducer from "./reducers";

const initalState = {};

const Middleware = [thunk];

const store = createStore(rootReducer, initalState, applyMiddleware(...middleware));

export default store;
