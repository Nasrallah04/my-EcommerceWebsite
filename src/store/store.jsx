// Here we'll store all the reducers and the store configuration

import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';


const middleware = [logger];
const composedEnhancers = compose(applyMiddleware(...middleware));

// Create the store
// it takes three arguments: the root reducer, the initial state, and the enhancer
export const store = createStore(rootReducer,undefined, composedEnhancers);

//root reducer
