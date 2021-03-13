import React from "react";
import './App.css';
import FeedPage from './components/feed';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logo from './components/kurakoo-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Search from "@material-ui/icons/Search";
import profileImg from './components/imgAvatar.png';

const useStyles = makeStyles({
  textField: {
    width: "10rem",
    height: "10px",
    color: "white",
    textSize: "5px",
    border: "2px solid white"
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <nav>
          <div id = "logo">
            <img className = "logo" src =  { Logo } />
          </div>
          <div id = "nav-content">
            <div id = "search-div">
              <input id = "search-bar" placeholder = "search"></input>
              <div id = "search-icon"> <Search/> </div>
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
              <img id = "profile-img" src = { profileImg }></img>
              <h5 id = "username">username</h5>
            </div>
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
