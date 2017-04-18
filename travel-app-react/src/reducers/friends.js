export default function Friends(state = {potentialFriends: [], addedFriends: []}, action) {
  switch (action.type) {
    case "FETCH_FRIENDS":
      let friends = []
      action.payload.forEach((friend) => {
        if (!state.potentialFriends.includes(friend) && !state.addedFriends.includes(friend.id)) {
          friends.push(friend)
        }
      })
      return Object.assign({}, state, {potentialFriends: friends})
    case 'ADD_FRIEND':
      let friendsAdded = []
      if (!state.addedFriends.includes(action.friend.friendID)) {
        friendsAdded.push(action.friend.friendID)
      }
      return Object.assign({}, state, {addedFriends: friendsAdded})
    case 'REMOVE_FRIEND':
      return state.potentialFriends.filter((friend) => friend.id !== action.friendID) 
    default:
      return state
  }
}
