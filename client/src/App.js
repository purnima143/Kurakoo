import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feed from './components/feed';
import Signup from './Component/SignUp/SignUp';
import Signin from "./Component/SignIn/SignIn";
import Homepage from "./Component/homepage/homepage";

const App = () => {
  return (
    <>
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signup"  component={Signup} />
        <Route path="/signin"  component={Signin} />
        <Route path="/feed"  component={Feed} />
      </Switch>
    </BrowserRouter>
        
      </>
  );
};


export default App;