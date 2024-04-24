// Here we'll store all the reducers and the store configuration
import { compose, createStore, applyMiddleware } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';
import rootReducer from './root-reducer';


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)


const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
  
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());
  
    next(action);
  
    console.log('next state: ', store.getState());
  };

const middleware = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleware));

// Create the store
// it takes three arguments: the root reducer, the initial state, and the enhancer
export const store = createStore(persistedReducer,undefined, composedEnhancers);

export const persistor = persistStore(store);  // used to create a persistor object