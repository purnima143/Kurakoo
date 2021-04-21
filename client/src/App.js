import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preloader from "./Component/Preloader/Preloader";
import NotificationPage from "./Component/NotificationPage/NotificationPage";
import AddAQuestion from "./Component/AddAQuestion/AddAQuestion";
import NotFound from "./Component/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.constants";

const Homepage = lazy(() => import("./Component/homepage/homepage"));
const Signup = lazy(() => import("./Component/SignUp/SignUp"));
const Signin = lazy(() => import("./Component/SignIn/SignIn"));
const Feed = lazy(() => import("./components/feed"));
const AboutUs = () => import("./Component/aboutus/aboutus");

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    return (
        <>
            <Suspense fallback={<Preloader />}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/feed" component={Feed} />
                        <Route
                            path="/notification"
                            component={NotificationPage}
                        />
                        <Route path="/addaquestion" component={AddAQuestion} />
                        <Route path="/aboutus" component={AboutUs} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </>
    );
};

export default App;
