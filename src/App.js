import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';
import SwitchNavigation from './Components/Navigation/SwitchNavigation.js'

const store = createStore(reducers, applyMiddleware(thunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SwitchNavigation />
    </Provider>
  );
};


export default App;
