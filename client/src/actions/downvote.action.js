import { USER_DOWNVOTE_FAIL, USER_DOWNVOTE_REQUEST, USER_DOWNVOTE_SUCCESS } from "./constants"

export const updateUserUpvote = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_DOWNVOTE_REQUEST,
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

      const { data } = await axios.put(`/api/user/upvote/${id}`, user, config)
       data =  data - 1;

      dispatch({
        type: USER_DOWNVOTE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_DOWNVOTE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }  