import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <div>
          <Switch>
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Provider> 
    </BrowserRouter>   
  );
}

export default App;