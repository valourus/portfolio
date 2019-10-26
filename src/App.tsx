import React, { FunctionComponent } from 'react';
import Homepage from './Screens/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from './Shared/Navbar/Navbar';
import './global.css';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <div style={{display: 'flex'}}>
      <Navbar />
      <Router>
      <Switch>
        
        <Route exact path="/"><Homepage /></Route>

        <Route path="*" Component={<h1>404 - not found</h1>} />
      </Switch>
    </Router>
   </div>
  );
}

export default App;
