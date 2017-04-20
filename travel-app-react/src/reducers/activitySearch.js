export default function activitySearch(state = { keyword: 'point of interest', radius: 25}, action) {
  switch (action.type) {
    case "SET_RADIUS":
      return Object.assign({}, state, {radius: action.radius})
      case "SET_KEYWORD":
        return Object.assign({}, state, {keyword: action.keyword})
    default:
      return state
  }
}
