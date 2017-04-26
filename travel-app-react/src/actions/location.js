import axios from 'axios'
import api from './api'

export const setLocation = (location) => ({
  type: "SET_LOCATION", payload: location
})

export const clearLocations = () => ({
  type: "CLEAR_LOCATIONS"
})

export const resetLocations = () => ({
  type: "RESET_LOCATIONS"
})

export const resetSearch = () => ({
  type: "RESET_SEARCH"
})

export const fetchLocations = (query) => {
  return (dispatch) => {
    let prefix = api
    axios
      .post(`${prefix}/location`, {search_term: query})
      .then(response => {
        let payload = response.data
        dispatch({type: 'SET_LOCATIONS', payload})
      })
  }
}
