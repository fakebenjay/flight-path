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

export const fetchTrips = (token) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/mytrips`, {token: token})
      .then(response => {
        let payload = response.data
        dispatch({type: 'FETCH_TRIPS', payload})
      })
  }
}

export const fetchTrip = (trip_id) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/fetchtrip`, {trip_id: trip_id})
      .then(response => {
        let payload = response.data
        dispatch({type: 'FETCH_TRIPS', payload})
      })
  }
}
