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

export const fetchTripImage = (trip) => {
  return (dispatch) => {
    debugger
    axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${trip.googleId}&key=AIzaSyDOnb3A_Rz8r3FzCcQThWEN82lUQDGcLBA`)
    .then(response => {
      debugger
      return response
    })
  }
}
