import axios from 'axios'

export const addTrip = (trip, token, friends) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/trips`, {trip: trip, token: token, friends: friends})
      .then(response => {
        let trip = response.data
        dispatch({type: 'ADD_TRIP', trip})
      })
  }
}
