import React from 'react';
import Query from './Components/Query/Query';
import Login from './Components/Login/Login';
import Event from './Components/Event/Event';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers';
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
