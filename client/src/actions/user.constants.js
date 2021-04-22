import { userConstants } from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {
    console.log(user);

    return async (dispatch) => {
        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const {data} = await axios.post('/signup', {
            ...user
        })

        if ( res.data ){
            const { message } = data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            });
        } else {
            if( res.data ){
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                });
            }

        }
    }
}