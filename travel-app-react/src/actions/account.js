import axios from 'axios'

export const setUsername = (username) => {
  type: "SET_USERNAME",
  username
}

export const createAccount = (params) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/registrations`, {
        account: {
          username: params.username,
          password: params.password,
          email: params.email
        }
      })
      .then(response => {
        let token = response.data.token
        localStorage.setItem('token', token)
      })
  }
}

  export const login = (params) => {
    return (dispatch) => {
      let prefix = 'http://localhost:3001'
      axios
        .post(`${prefix}/sessions`, {
          username: params.username,
          password: params.password
        })
        .then(response => {
          let token = response.data.token
          localStorage.setItem('token', token)
        })
    }
}

export const authorize = (token) => {
  return (dispatch) => {
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/authorize`, {token: token})
      .then(response => {
        let account = response.data
        dispatch({type: 'SET_ACCOUNT', account})
      })
  }
}

export const clearAccount = () => {
  type: 'CLEAR_ACCOUNT'
}
