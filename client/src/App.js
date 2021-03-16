import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import SignUp from './Component/SignUp/SignUp';
import { FeedPage } from './Component/feedpage/FeedPage';
import SignIn from "./Component/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <div>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/feedpage" component={FeedPage} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </div>
    </Provider> 
    </BrowserRouter>   
  );
}

export default App;