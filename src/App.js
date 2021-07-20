import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patients from './components/PatientsEdit';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Patients} />
        <Route exact path="/Patients" component={Patients} />
      </Switch>
    </Router>
  );
}

export default App;
