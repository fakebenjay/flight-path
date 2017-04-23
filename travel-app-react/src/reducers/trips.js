export default function Trip(state = [], action) {
  switch (action.type) {
    case "ADD_TRIP":
      return [...state, action.trip]
    case "FETCH_TRIPS":
      return action.payload.reverse()
    case "REMOVE_TRIP":
      let filteredTripList = state.filter((trip) => trip.id !== action.trip_id)
      return filteredTripList
    default:
      return state
  }
}
