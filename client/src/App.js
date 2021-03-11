import React from "react";
import './App.css';
import FeedPage from './components/feed';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div id = "logo">
            <h1>LOGO</h1>
          </div>
        </nav>
        <Switch>
          <Route path = "/" exact component = { FeedPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
