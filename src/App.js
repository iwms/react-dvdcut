import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patients from './components/Patients';
import PatientsAdd from './components/PatientsAdd';
import PatientsEdit from './components/PatientsEdit';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PatientsEdit} />
        <Route exact path="/PatientsAdd" component={PatientsAdd} />
        <Route exact path="/PatientsEdit" component={PatientsEdit} />
        <Route exact path="/Patients" component={Patients} />
      </Switch>
    </Router>
  );
}

export default App;
