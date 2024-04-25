// Here we'll store all the reducers and the store configuration
import { compose, createStore, applyMiddleware } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';
import {thunk} from "redux-thunk"
import rootReducer from './root-reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // only cart will be persisted
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV !== 'production' && logger,thunk].filter(Boolean); // filter out the falsy values

// Compose the enhancers
// The compose function is used to combine multiple store enhancers
// if we're on the browser and the redux devtools extension is installed, we'll use it
// otherwise, we'll use the default compose function
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// Create the store
// it takes three arguments: the root reducer, the initial state, and the enhancer
export const store = createStore(persistedReducer,undefined, composedEnhancers);

export const persistor = persistStore(store);  // used to create a persistor object