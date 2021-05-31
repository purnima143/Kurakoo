import {
     USER_COMMENT_FAIL, 
     USER_COMMENT_REQUEST, 
     USER_COMMENT_RESET, 
     USER_COMMENT_SUCCESS, 
     USER_UPDATE_COMMENT_FAIL, 
     USER_UPDATE_COMMENT_REQUEST,
     USER_UPDATE_COMMENT_RESET,
     USER_UPDATE_COMMENT_SUCCESS
    } from "../actions/constants"

export const commentListReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
      case USER_COMMENT_REQUEST:
        return { loading: true }
      case USER_COMMENT_SUCCESS:
        return { loading: false, users: action.payload }
      case USER_COMMENT_FAIL:
        return { loading: false, error: action.payload }
        case USER_COMMENT_RESET:
          return { comments: [] }
      default:
        return state
    }
} 

export const userUpdateCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_COMMENT_REQUEST:
      return { loading: true }
    case USER_UPDATE_COMMENT_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_COMMENT_FAIL:
      return { loading: false, error: action.payload }
      case USER_UPDATE_COMMENT_RESET:
        return { comment: {} }
    default:
      return state
  }
} 