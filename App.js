import React from 'react';
import Query from './src/Components/Query/Query';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/Reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Query />
    </Provider>
  );
};


export default App;
