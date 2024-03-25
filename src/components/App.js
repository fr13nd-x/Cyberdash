// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Your home component */}
        </Route>
        <Route exact path="/dashboard">
          {/* Your dashboard component */}
        </Route>
        {/* Add more routes as needed */}
        <Route path="*">
          {/* Redirect to a 404 page or another route */}
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;