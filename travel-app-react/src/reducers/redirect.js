export default function Redirect(state = {redirect: false}, action) {
  switch (action.type) {
    case "SET_REDIRECT":
      return Object.assign({}, state, {redirect: true})
    default:
      return state
  }
}
