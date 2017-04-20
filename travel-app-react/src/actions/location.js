import axios from 'axios'

export const setLocation = (location) => ({
  type: "SET_LOCATION", payload: location
})

export const fetchLocations = (query) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/location`, {search_term: query})
      .then(response => {
        let payload = response.data
        dispatch({type: 'SET_LOCATIONS', payload})
      })
  }
}

export const clearLocations = () => ({
  type: "CLEAR_LOCATIONS"
})

export const resetLocations = () => ({
  type: "RESET_LOCATIONS"
})
