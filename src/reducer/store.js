import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userReducer} from './userreducer';

export const store = createStore(combineReducers({userReducer}));
store.subscribe(() => {
    // it does get call after every dispatch operation and print the current state about each each reducer
    console.log("current state of the store:",store.getState());
});   
