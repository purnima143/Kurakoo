import { USER_DOWNVOTE_FAIL, USER_DOWNVOTE_REQUEST, USER_DOWNVOTE_RESET, USER_DOWNVOTE_SUCCESS } from "../actions/constants"

export const userDownvoteReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_DOWNVOTE_REQUEST:
        return { loading: true }
      case USER_DOWNVOTE_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload }
      case USER_DOWNVOTE_FAIL:
        return { loading: false, error: action.payload }
        case USER_DOWNVOTE_RESET:
          return { downvote: {} }
      default:
        return state
    }
  } 