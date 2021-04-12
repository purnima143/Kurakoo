import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "./components/feed";
import Signup from "./Component/SignUp/SignUp";
import Signin from "./Component/SignIn/SignIn";
import Homepage from "./Component/homepage/homepage";
import NotificationPage from "./Component/NotificationPage/NotificationPage";
import AddAQuestion from "./Component/AddAQuestion/AddAQuestion";
import aboutus from "./Component/aboutus/aboutus";


const App = () => {
  return (
    <>

  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signup"  component={Signup} />
        <Route path="/signin"  component={Signin} />
        <Route path="/feed"  component={Feed} />
        <Route path="/notification" component={NotificationPage} />
        <Route path="/addaquestion" component={AddAQuestion} />
        <Route path="/aboutus" component={aboutus} />
        
      </Switch>
    </BrowserRouter>
        
      </>

  );
};

export default App;