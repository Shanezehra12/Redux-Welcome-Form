import {View, Text} from 'react-native';
import React from 'react';
import Navigator from './src/Navigator';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import Logout from './src/component/Logout';
import Login from './src/component/Login';
import userReducers from './src/redux/userReducers';

const rootReducer = combineReducers({
  user: userReducers,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
