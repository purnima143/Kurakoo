import thunk from 'redux-thunk';
import { applyMiddleware, createStore,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import {userListReducer, userUpdateReducer} from '../reducers/user.reducers'

const reducer = combineReducers({
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  })

const middleware = [thunk]
const store = createStore( reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store; 
