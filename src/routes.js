import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 

import App from './App';
import Signin from './components/Signin';
import Signout from './components/Signout';
import Signup from './components/Signup';
import UserDash from './components/UserDash';

const Routes = () => (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/signin' component={Signin} />
        <Route path='/signout' component={Signout} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={UserDash} />
      </ Route>
    </Router>
    )
    
export default Routes;