import { 
    USER_UPVOTE_FAIL, 
    USER_UPVOTE_REQUEST, 
    USER_UPVOTE_RESET, 
    USER_UPVOTE_SUCCESS 
} from "../actions/constants"

export const userUpvoteReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPVOTE_REQUEST:
        return { loading: true }
      case USER_UPVOTE_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload }
      case USER_UPVOTE_FAIL:
        return { loading: false, error: action.payload }
        case USER_UPVOTE_RESET:
          return { upvote: {} }
      default:
        return state
    }
  } 