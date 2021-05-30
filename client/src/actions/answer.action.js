import {
     USER_ANSWER_FAIL, 
     USER_ANSWER_REQUEST,
     USER_ANSWER_SUCCESS 
    } from "./constants"

export const listAnswers = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_ANSWER_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/user/answers`, config)
  
      dispatch({
        type: USER_ANSWER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_ANSWER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
