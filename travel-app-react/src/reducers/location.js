export default function Location(state = {formattedName: '', lng: null, lat: null}, action) {
  switch (action.type) {
    case "SET_LOCATION":
      let newState = Object.assign({}, state)
      newState.formattedName = action.payload.formatted_name
      newState.lng = action.payload.lng
      newState.lat = action.payload.lat
      return newState
    case "CLEAR_LOCATION":
      return Object.assign({}, state, {formattedName: '', lng: null, lat: null})
    default:
      return state
  }
}
