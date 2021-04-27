import { userConstants } from "../actions/constants";

const initState = {
    error: null,
    message: "",
    loading: false
}

export default ( state = initState, action ) => {
    switch( action.type ) {
        case userConstants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break;
        case userConstants.USER_REGISTER_SUCCES:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
        break;
        case userConstants.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
        break;
    }
    return state;
} 