import axios from 'axios'

export const setRadius = (radius) => ({
  type: "SET_RADIUS", radius
})

export const setKeyword = (keyword) => ({
  type: "SET_KEYWORD", keyword
})

export const fetchActivities = (radius, keyword, lng, lat, id) => {
  return (dispatch) => {
  let prefix = 'http://localhost:3001'
  axios
    .post(`${prefix}/searchactivities`, {activity: {radius: radius, keyword: keyword, lng: lng, lat: lat, id: id}})
    .then(response => {
      let payload = response.data
      dispatch({type: 'FETCH_ACTIVITIES', payload})
    })
  }
  }


  export const removePotentialActivity = (activity) => ({
    type: "REMOVE_POTENTIAL_ACTIVITY", activity
  })
