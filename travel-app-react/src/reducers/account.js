export default function Account(state = { token: null }, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return Object.assign({}, state, {
        token: action.token
      })
    default:
      return state
  }
}
