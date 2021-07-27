import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patients from './components/Patients';
import PatientsAdd from './components/PatientsAdd';
import PatientsEdit from './components/PatientsEdit';
import Signup from './components/Signup';
import InGarbage from './components/InGarbage';
import InGarbageAdd from './components/InGarbageAdd';
import Weight from './components/Weight';
import SAOApprove from './components/SAOApprove';
import SDHApprove from './components/SDHApprove';
import Report from './components/Report';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InGarbage} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/PatientsAdd" component={PatientsAdd} />
        <Route exact path="/PatientsEdit" component={PatientsEdit} />
        <Route exact path="/Patients" component={Patients} />
        <Route exact path="/InGarbage" component={InGarbage} />
        <Route exact path="/InGarbageAdd" component={InGarbageAdd} />
        <Route exact path="/Weight" component={Weight} />
        <Route exact path="/SAOApprove" component={SAOApprove} />
        <Route exact path="/SDHApprove" component={SDHApprove} />
        <Route exact path="/Report" component={Report} />
      </Switch>
    </Router>
  );
}

export default App;
