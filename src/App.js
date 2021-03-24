import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import SignUp from './pages/signUp';
import PageNotFound from './pages/notFound';
export default function App() {

  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route component={PageNotFound}></Route>
      </Switch>
    </Router>
  </div>
  );
}

