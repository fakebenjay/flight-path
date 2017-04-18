export default function Friends(state = { friends: [] }, action) {
  switch (action.type) {
    case "FETCH_FRIENDS":
      return Object.assign({}, state, {
        friends: action.payload
      })
    default:
      return state
  }
}
