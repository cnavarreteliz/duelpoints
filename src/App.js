import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';

import './App.scss';

import Duelpoints from './pages/duelpoints/Duelpoints';

const routes = [
  {
    path: '/',
    exact: true,
    component: Duelpoints
  }
]

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
