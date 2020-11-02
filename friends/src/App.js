import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components';
import FriendsList from './components/FriendsList';
import Login from './components/FriendsList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ul>
        <li>
          <Link to='/login' >Login</Link>
        </li>
        <li>
          <Link to='/protected' >Protected</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <Route to={'/log in'} component={Login} />
        <Route><Login /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
