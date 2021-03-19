import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import FeedPage from './components/feed';
import store from './store/store';
import SignUp from './Component/SignUp/SignUp';
import SignIn from "./Component/SignIn/SignIn";
import Logo from './components/kurakoo-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Search from "@material-ui/icons/Search";
import profileImg from './components/imgAvatar.png';
import Homepage from "./Component/homepage/homepage";

const useStyles = makeStyles({
  searchIcon: {
    marginTop: "2px",
  },
});

function App() {
  const classes = useStyles();
  return (

    <Router>
    <Provider store={store}>
      <div className="App">
        <nav>
          <div id = "logo">
            <img className = "logo" src =  { Logo } alt = "alt"/>
          </div>
          <div id = "nav-content">
            <div id = "search-div">
              <input id = "search-bar" placeholder = "search"></input>
              <div id = "search-icon"> <Search className={ classes.searchIcon }/> </div>
            </div>
            <ul id = "nav-items-list">
              <li className="nav-item">Home</li>
              <li className="nav-item">Question</li>
              <li className="nav-item">Following</li>
              <li className="nav-item">Notifications</li>
            </ul>
          </div>
          <div id = "nav-div">
            <div id = "profile">
              <img id = "profile-img" src = { profileImg } alt = "alt"></img>
              <h5 id = "username">username</h5>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/feedpage" component={FeedPage} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </Provider> 
    </Router>

  );
}

export default App;