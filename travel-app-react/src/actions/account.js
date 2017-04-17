import axios from 'axios'

export const setUsername = (username) => {
  type: "SET_USERNAME",
  username
}

export const setToken = (token) => {
  type: "SET_TOKEN",
  token
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
        dispatch({type: 'SET_TOKEN', token})
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
          dispatch({type: 'SET_TOKEN', token})
        })
    }
}
