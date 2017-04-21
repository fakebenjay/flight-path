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

export const addFriendToTrip = (friend, tripObj) => {
  let trip = {id: tripObj.id, friend_id: friend.id}
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .patch(`${prefix}/trips/${trip.id}`, {trip: trip})
      .then(response => {
        let payload = response.data
        debugger
        dispatch({type: 'FETCH_TRIP', payload})
      })
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
