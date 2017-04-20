import axios from 'axios'

export const editActivity = (input, activity, account) => {
  let activityID = activity.id
  let tripID = activity.trip_id
  let account_id = account.id
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/trips/${tripID}/activities/${activityID}/comments`, {input: input, account_id: account_id})
      .then(response => {
        let payload = response.data
        dispatch({type: 'ADD_ACTIVITY', payload})
      })
  }
}
