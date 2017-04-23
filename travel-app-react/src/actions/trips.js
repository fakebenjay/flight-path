import axios from 'axios'
import { resetLocations } from './location'

export const addTrip = (trip, token, friends) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/trips`, {trip: trip, token: token, friends: friends})
      .then(response => {
        let trip = response.data
        dispatch({type: 'ADD_TRIP', trip})
      }).then(() => {
        dispatch({type: "SET_REDIRECT_TRUE"})
        dispatch(resetLocations())
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
        dispatch({type: 'FETCH_TRIP', payload})
      })
    }
  }

export const updateStartDate = (date, trip, token) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/change-date`, {start_date: date, trip_id: trip, token: token})
      .then(response => {
        let payload = response.data
        dispatch({type: 'EDIT_START_DATE', payload})
      })
    }
}

export const updateEndDate = (date, trip, token) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/change-date`, {end_date: date, trip_id: trip, token: token})
      .then(response => {
        let payload = response.data
        dispatch({type: 'EDIT_END_DATE', payload})
      })
    }
}

export const editEndDate = (date) => {
  return {
    type: "EDIT_START_DATE",
    date
  }
}

export const editStartDate = (date) => {
  return {
    type: "EDIT_END_DATE",
    date
  }
}

export const leaveTrip = (account_id, token, trip_id) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/leavetrip`, {account_id: account_id, token: token, trip_id: trip_id})
      .then(() => {
        dispatch({type: "SET_REDIRECT"})
      })
    }
}

export const removeTrip = (trip_id) => {
  return {
    type: "REMOVE_TRIP",
    trip_id
  }
}
