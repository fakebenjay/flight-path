export default function Account(state = { token: null, username: null }, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return Object.assign({}, state, {
        token: action.payload
      })

    case "SET_USERNAME":
      return Object.assign({}, state, {
        username: action.payload
      })
    default:
      return state
  }
}
