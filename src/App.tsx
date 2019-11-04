import React, { FunctionComponent } from 'react';
import Homepage from './Screens/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from './Shared/Navbar/Navbar';
import './global.css';
import { AboutMe } from './Screens/AboutMe/AboutMe';
import { Skills } from './Screens/Skills/Skills';
import { DevelopmentPage } from './Screens/Development/DevelopmentPage';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <Navbar />
        <Switch>

          <Route exact path="/"><Homepage /></Route>

          <Route exact path="/about-me"><AboutMe /></Route>
          <Route exact path="/skills"><Skills /></Route>
          <Route exact path="/game-dev"><DevelopmentPage /></Route>

          <Route path="*" Component={<h1>404 - not found</h1>} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
