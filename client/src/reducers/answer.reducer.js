import { 
    USER_ANSWER_FAIL,
    USER_ANSWER_REQUEST,
     USER_ANSWER_RESET, 
     USER_ANSWER_SUCCESS, 

     USER_UPDATE_ANSWER_FAIL, 
     USER_UPDATE_ANSWER_REQUEST,
     USER_UPDATE_ANSWER_RESET,
     USER_UPDATE_ANSWER_SUCCESS

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



export const userUpdateAnswerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_ANSWER_REQUEST:
      return { loading: true }
    case USER_UPDATE_ANSWER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_ANSWER_FAIL:
      return { loading: false, error: action.payload }
      case USER_UPDATE_ANSWER_RESET:
        return { answer: {} }
    default:
      return state
  }
}

