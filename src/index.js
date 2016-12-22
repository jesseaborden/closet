import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import Routes from './routes.js';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes />
  </ Provider>
  , document.getElementById('root'));
