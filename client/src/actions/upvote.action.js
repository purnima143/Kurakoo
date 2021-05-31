import { USER_UPVOTE_FAIL, USER_UPVOTE_REQUEST, USER_UPVOTE_SUCCESS } from "./constants"

export const updateUserUpvote = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPVOTE_REQUEST,
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
       data = 1+ data;

      dispatch({
        type: USER_UPVOTE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_UPVOTE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  } 