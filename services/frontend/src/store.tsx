import { createStore, applyMiddleware, StoreEnhancer } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import demographicTableReducer from "./reducer";
import { IAction } from './action';

import IStoreState from './state'

let middlewares: StoreEnhancer = applyMiddleware(promiseMiddleware(), createLogger({
    duration: true
}));

const store = createStore<IStoreState, IAction, any, any>(demographicTableReducer, middlewares);

export default store;