export default function Trip(state = [], action) {
  switch (action.type) {
    case "ADD_TRIP":
      return [...state, action.trip]
    case "FETCH_TRIPS":
      return action.payload
    default:
      return state
  }
}
