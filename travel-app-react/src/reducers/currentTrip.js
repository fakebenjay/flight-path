export default function CurrentTrip(state = {}, action) {
  switch (action.type) {
    case "FETCH_TRIP":
      return action.payload
    default:
      return state
  }
}
