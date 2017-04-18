import axios from 'axios'

export const setLocation = (query) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/location`, {search_term: query})
      .then(response => {
        let payload = response.data
        dispatch({type: 'SET_LOCATION', payload})
      })
  }
}

export const clearLocation = () => {
  type: "CLEAR_LOCATION"
}
