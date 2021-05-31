import {
     USER_ANSWER_FAIL, 
     USER_ANSWER_REQUEST,
     USER_ANSWER_SUCCESS, 
     USER_UPDATE_ANSWER_FAIL, 
     USER_UPDATE_ANSWER_REQUEST,
     USER_UPDATE_ANSWER_SUCCESS
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


  export const updateUserAnswer = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_ANSWER_REQUEST,
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
        type: USER_UPDATE_ANSWER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_UPDATE_ANSWER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }