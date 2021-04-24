import React , {lazy,Suspense, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import NotificationPage from "./components/NotificationPage/NotificationPage";
import AddAQuestion from "./components/AddAQuestion/AddAQuestion";
import NotFound from "./components/NotFound/NotFound";
import Scroll from "./components/ScrollToTop/ScrollToTop";
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from "./actions/auth.constants";


const Homepage=lazy(()=> import("./components/Homepage-UI/homepage1"));
const Signup=lazy(()=>import("./components/SignUp/SignUp"));
const Signin=lazy(()=>import("./components/SignIn/SignIn"));
const Feed=lazy(()=>import("./components/feed/feed"));
const AboutUs=(()=>import("./components/aboutus/aboutus"));


const App = () => {
  const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
      if(!auth.authenticate){
        dispatch(isUserLoggedIn());
      }
    }, []);

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
