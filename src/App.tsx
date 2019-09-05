import React from 'react';
import { Provider } from 'react-redux';

import store from './appConfig/store';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
