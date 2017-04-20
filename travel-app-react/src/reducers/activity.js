export default function Activity(state = [], action) {
  switch (action.type) {
    case "ADD_ACTIVITY":
      return [...state, action.payload]
    default:
      return state
  }
}
