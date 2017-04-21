import axios from 'axios'

export const saveActivity = (activity) => {
  return (dispatch) => {
  let prefix = 'http://localhost:3001'
  axios
    .post(`${prefix}/activities`, {activity: activity})
    .then(response => {
      let payload = response.data
      dispatch({type: 'ADD_ACTIVITY', payload})
    })
  }
}

export const removePotentialActivity = (activity) => {

  
}
