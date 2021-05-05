import React, {  Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import NotificationPage from "./components/NotificationPage/NotificationPage";
import Answerquestion from "./components/Answer/Answer";
import NotFound from "./components/NotFound/NotFound";
import Team from "./components/Team/team"
import AboutUs from "./components/aboutus/aboutus"
import Homepage from "./components/Homepage-UI/homepage1"
import Signup from "./components/SignUp/SignUp"
import Signin from "./components/SignIn/SignIn"
import Feed from "./components/feed/feed"
import Scroll from "./components/ScrollToTop/ScrollToTop"

import Profile from "./components/profilePage/profilePage";
import { useDispatch, useSelector } from "react-redux";


const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    return (
        <>
            <Suspense fallback={<Preloader />}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/Team" exact component={Team} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/feed" component={Feed} />
                        <Route
                            path="/notification"
                            component={NotificationPage}
                        />
                        <Route path="/addaquestion" component={Answerquestion} />
                        <Route path="/aboutus" component={AboutUs} />
                        <Route path="/profile" component={Profile} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
                <Scroll />
            </Suspense>
        </>
    );
};

export default App;
