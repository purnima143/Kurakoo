import React, {  Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./components/Preloader/Preloader";
import NotFound from "./components/NotFound/NotFound";
import Scroll from "./components/ScrollToTop/ScrollToTop"
import UserEdit from "./components/UserEditScreen/UserEdit"
import AdminUserList from "./components/Admin_userlist/admin_userlist"
import AdminUserUpdate from "./components/Admin_UserUpdate/admin_userupdate"
import bookmarkPage from "./components/bookmarkPage/bookmarkPage";
import ChatBotComponent from './components/Chatbot/chatbot';

const NotificationPage = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/NotificationPage/NotificationPage')), 5000);
    });
  });

const Answerquestion = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Answer/Answer')), 5000);
    });
  });

const Team = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Team/team')), 5000);
    });
  });

const AboutUs = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/aboutus/aboutus')), 5000);
    });
  });
const Homepage = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Homepage-UI/homepage1')), 5000);
    });
  });

const Signup = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/SignUp/SignUp')), 5000);
    });
  });

const Signin = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/SignIn/SignIn')), 5000);
    });
  });

const Feed = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/feed/feed')), 5000);
    });
  });
  
const Profile = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/profilePage/profilePage')), 5000);
    });
  });

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
                        <Route path="/useredit" component={UserEdit} />
                        <Route path="/admin/userlist" component={AdminUserList} />
                        <Route path="/admin/userupdate" component={AdminUserUpdate} />
                        <Route path="/bookmark" component={bookmarkPage} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
                <Scroll />
                <ChatBotComponent/>
            </Suspense>
        </>
    );
};

export default App;
