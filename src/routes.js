import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 

import App from './App';
import Signin from './components/Signin'

const Routes = () => (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/signin' component={Signin} />
      </ Route>
    </Router>
    )
export default Routes;