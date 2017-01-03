import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import Routes from './routes.js';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import './index.css';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token')

if(token){
  store.dispatch({ type: AUTH_USER  });
}

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </ Provider>
  , document.getElementById('root'));
