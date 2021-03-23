import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import SignUp from './Component/SignUp/SignUp';
import { FeedPage } from './Component/feedpage/FeedPage';
import SignIn from "./Component/SignIn/SignIn";
import Footer from './Component/Footer/Footer';
import Navbar from './Component/navbar/Navbar';
import Feed from './Component/feedpage/FeedPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <div>
              <Navbar />
              <Feed />
              <Footer />
              <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/feedpage" component={FeedPage} />
                <Route path="/signin" component={SignIn} />
              </Switch>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;