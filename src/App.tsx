import React, { FunctionComponent } from 'react';
import Homepage from './Screens/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App: FunctionComponent = (): JSX.Element => {
  return (
   <Router>
     <Switch>
       <Route exact path="/"><Homepage /></Route>


       <Route path="*" Component={<h1>404 - not found</h1>} />
    </Switch>
   </Router>
  );
}

export default App;
