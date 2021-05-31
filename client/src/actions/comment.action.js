import { 
    USER_COMMENT_FAIL, 
    USER_COMMENT_REQUEST, 
    USER_COMMENT_SUCCESS, 
    USER_UPDATE_COMMENT_FAIL, 
    USER_UPDATE_COMMENT_REQUEST,
    USER_UPDATE_COMMENT_SUCCESS
} from "./constants"

export const listComments = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_COMMENT_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.get(`/api/user/comments`, config)

      dispatch({
        type: USER_COMMENT_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  } 

  
  export const updateUserComment = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_COMMENT_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.put(`/api/user/comment/${id}`, user, config)

      dispatch({
        type: USER_UPDATE_COMMENT_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_UPDATE_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  } 