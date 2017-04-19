export default function Account(state = { username: null, account_id: null }, action) {
  switch (action.type) {
    case "SET_ACCOUNT":
      return Object.assign({}, state, {
        username: action.account.username,
        account_id: action.account.id
      })
    case "CLEAR_ACCOUNT":
      return Object.assign({}, state, {
        username: null,
        account_id: null
      })
    default:
      return state
  }
}
