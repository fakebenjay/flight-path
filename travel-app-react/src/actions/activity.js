import axios from 'axios'
import api from '../config/api'

export const saveActivity = (activity) => {
  return (dispatch) => {
  let prefix = api
  axios
    .post(`${prefix}/activities`, {activity: activity})
    .then(response => {
      let payload = response.data
      dispatch({type: 'ADD_ACTIVITY', payload})
    })
  }
}
