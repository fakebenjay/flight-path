import axios from 'axios'

export const fetchFriends = (query, token) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/friends`, {search_term: query, token: token})
      .then(response => {
        let payload = response.data
        dispatch({type: 'FETCH_FRIENDS', payload})
      })
  }
}

export const addFriend = (friend) => {
  return {
    type: "ADD_FRIEND",
    friend
  }
}

export const removeFriend = (friend) => {
  return {
    type: "REMOVE_FRIEND",
    friend
  }
}


export const removeAddedFriend = (friend) => {
  return {
    type: "REMOVE_ADDED_FRIEND",
    friend
  }
}

export const clearFriends = () => ({
  type: "CLEAR_FRIENDS"
})
