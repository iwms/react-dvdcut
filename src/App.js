import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patients from './components/Patients';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Patients} />
      </Switch>
    </Router>
  );
}

export default App;
