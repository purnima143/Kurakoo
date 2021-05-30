import React, {  Suspense } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import Scroll from "./components/ScrollToTop/ScrollToTop"
import ChatBotComponent from './components/Chatbot/chatbot';

const NotFound = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/NotFound/NotFound')), 3000);
  });
});
const bookmarkPage= React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/bookmarkPage/bookmarkPage')), 5000);
  });
});

const UserEdit = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/UserEditScreen/UserEdit')), 5000);
  });
});

const AdminUserList = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Admin_userlist/admin_userlist')), 5000);
  });
});

const AdminUserUpdate = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Admin_UserUpdate/admin_userupdate')), 5000);
  });
});

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
