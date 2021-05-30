import { 
    USER_ANSWER_FAIL,
    USER_ANSWER_REQUEST,
     USER_ANSWER_RESET, 
     USER_ANSWER_SUCCESS 
    } from "../actions/constants"

export const answerListReducer = (state = { answers: [] }, action) => {
    switch (action.type) {
      case USER_ANSWER_REQUEST:
        return { loading: true }
      case USER_ANSWER_SUCCESS:
        return { loading: false, users: action.payload }
      case USER_ANSWER_FAIL:
        return { loading: false, error: action.payload }
        case USER_ANSWER_RESET:
          return { answers: [] }
      default:
        return state
    }
}
