import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userReducer} from './userreducer';


const timerMiddleware = store => next => action => {
    console.log("this is middleware:",action)
    // next(action);
  };
const middleware = applyMiddleware(timerMiddleware);

export const store = createStore(combineReducers({userReducer}),middleware);
store.subscribe(() => {
    // it does get call after every dispatch operation and print the current state about each each reducer
   //    console.log("current state of the store:",store.getState());
});   
