import axios from 'axios'

export const editActivity = (input, activity, account) => {
  let activityID = activity.id
  let tripID = activity.trip_id
  let account_id = account.account_id
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/trips/${tripID}/activities/${activityID}/comments`, {
        comment: {activity_id: activityID, account_id: account_id, comment: input}
      })
  }
}
