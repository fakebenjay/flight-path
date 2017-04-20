import axios from 'axios'

export const setToken = (token) => ({
 type: 'SET_TOKEN', payload: token
})

export const setAccount = (token) => {
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

export const clearAccount = () => ({
  type: 'CLEAR_ACCOUNT'
})


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
        dispatch(setToken(token))
        dispatch(setAccount(token))
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
          dispatch(setToken(token))
          dispatch(setAccount(token))
        })
    }
}
