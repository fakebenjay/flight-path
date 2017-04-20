export default function activitySearch(state = { keyword: '', radius: 25, activities: []}, action) {
  switch (action.type) {
    case "SET_RADIUS":
      return Object.assign({}, state, {radius: action.radius})
      case "SET_KEYWORD":
        return Object.assign({}, state, {keyword: action.keyword})
      case "FETCH_ACTIVITIES":
        let newActivites = action.payload
        return Object.assign({}, state, {activities: newActivites})
    default:
      return state
  }
}
