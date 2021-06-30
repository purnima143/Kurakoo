import thunk from 'redux-thunk';
import { applyMiddleware, createStore,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import {userListReducer, userUpdateReducer, userUpdateProfileReducer} from '../reducers/user.reducers'
import { answerListReducer, userUpdateAnswerReducer } from "../reducers/answer.reducer";



import {questionListReducer, userUpdateQuestionReducer} from '../reducers/question.reducer'

import {commentListReducer, userUpdateCommentReducer} from '../reducers/comment.reducer'

import {userDownvoteReducer} from '../reducers/downvote.reducer'

import {userUpvoteReducer} from '../reducers/upvote.reducer'


const reducer = combineReducers({
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  userUpdateProfile: userUpdateProfileReducer,
  commentListr: commentListReducer,
  questionList:questionListReducer,
  answerList: answerListReducer,
  userUpdateQuestion:userUpdateQuestionReducer,
  userUpdateComment: userUpdateCommentReducer,
  userUpdateAnswer: userUpdateAnswerReducer,

  userDownvote:userDownvoteReducer,

  userUpvote:userUpvoteReducer,


})

const middleware = [thunk]
const store = createStore( reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store; 
