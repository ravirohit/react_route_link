import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userReducer} from './userreducer';
import {expense} from './expensereducer'

export const store = createStore(combineReducers({userReducer,expense}));
store.subscribe(()=>console.log("subscribe called"));   
