export default function Location(state = {formattedName: '', lng: null, lat: null}, action) {
  switch (action.type) {
    case "SET_LOCATION":
      return Object.assign({}, state, {
        formattedName: action.payload.formatted_name,
        lng: action.payload.lng,
        lat: action.payload.lat
      })
    case "CLEAR_LOCATION":
      return Object.assign({}, state, {formattedName: '', lng: null, lat: null})
    default:
      return state
  }
}
