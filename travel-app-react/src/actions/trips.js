import axios from 'axios'

export const addTrip = (trip, token) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/trips`, {trip: trip, token: token})
      .then(response => {
        let trip = response.data
        dispatch({type: 'ADD_TRIP', trip})
      })
  }
}
