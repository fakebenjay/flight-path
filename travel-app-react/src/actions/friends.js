import axios from 'axios'

export const fetchFriends = (query) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/friends`, {search_term: query})
      .then(response => {
        let payload = response.data
        dispatch({type: 'FETCH_FRIENDS', payload})
      })
  }
}

export const addFriend = (friendID) => {
  return {
    type: "ADD_FRIEND",
    friendID
  }
}

export const removeFriend = (friendID) => {
  return {
    type: "REMOVE_FRIEND",
    friendID
  }
}
