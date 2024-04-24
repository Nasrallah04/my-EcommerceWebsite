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

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean); // filter out the falsy values
const composedEnhancers = compose(applyMiddleware(...middlewares));

// Create the store
// it takes three arguments: the root reducer, the initial state, and the enhancer
export const store = createStore(persistedReducer,undefined, composedEnhancers);

export const persistor = persistStore(store);  // used to create a persistor object