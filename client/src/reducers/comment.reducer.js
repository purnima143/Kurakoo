import {
     USER_COMMENT_FAIL, 
     USER_COMMENT_REQUEST, 
     USER_COMMENT_RESET, 
     USER_COMMENT_SUCCESS 
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