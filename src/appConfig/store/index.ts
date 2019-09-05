import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import services from '../../services';
import { composeEnhancers } from './utils';

const epicMiddleware = createEpicMiddleware<any, any, any, any>({
  dependencies: services
});

function configureStore() {
  const initialState = {};
  const middlewares = [epicMiddleware];
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, initialState, enhancers);
}

const store = configureStore();
epicMiddleware.run(rootEpic);

export default store;
