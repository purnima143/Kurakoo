import thunk from 'redux-thunk';
import { applyMiddleware, createStore,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import {userListReducer, userUpdateReducer, userUpdateProfileReducer} from '../reducers/user.reducers'
import { answerListReducer } from "../reducers/answer.reducer";

import {questionListReducer} from '../reducers/question.reducer'
const reducer = combineReducers({
  userList: userListReducer,
  userUpdate: userUpdateReducer,

  userUpdateProfile:userUpdateProfileReducer,
  questionList:questionListReducer,

  answerList: answerListReducer,

  })

const middleware = [thunk]
const store = createStore( reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store; 
