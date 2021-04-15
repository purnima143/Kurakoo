import React , {lazy,Suspense} from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preloader from "./Component/Preloader/Preloader";
import NotificationPage from "./Component/NotificationPage/NotificationPage";
import AddAQuestion from "./Component/AddAQuestion/AddAQuestion";


const Homepage=lazy(()=> import("./Component/homepage/homepage"));
const Signup=lazy(()=>import("./Component/SignUp/SignUp"));
const Signin=lazy(()=>import("./Component/SignIn/SignIn"));
const Feed=lazy(()=>import("./components/feed"));
const AboutUs=(()=>import("./Component/aboutus/aboutus"));


const App = () => {
  return (
    <>
    <Suspense fallback={<Preloader />}>
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signup"  component={Signup} />
        <Route path="/signin"  component={Signin} />
        <Route path="/feed"  component={Feed} />
        <Route path="/notification" component={NotificationPage} />
        <Route path="/addaquestion" component={AddAQuestion} />
        <Route path="/aboutus" component={AboutUs} />
        
      </Switch>
    </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
