export default function Trip(state = [], action) {
  switch (action.type) {
    case "ADD_TRIP":
      debugger
      return [...state, action.trip]
    default:
      return state
  }
}
