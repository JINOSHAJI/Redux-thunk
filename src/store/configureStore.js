import { createStore, combineReducers, compose,applyMiddleware } from 'redux';
import thunk from "redux-thunk";


import counterReducer from './reducers/counter';
import movieReducer from './reducers/movies';

const rootReducer = combineReducers({
    CounterReducer: counterReducer,
    MovieReducer: movieReducer,

});
let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  
  const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  };
export default configureStore;