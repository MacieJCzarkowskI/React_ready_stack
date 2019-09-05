import { compose } from 'redux';

const windowIfDefined = typeof window === 'undefined' ? null : (window as any);

export const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    windowIfDefined &&
    windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
