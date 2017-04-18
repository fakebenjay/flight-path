import { combineReducers } from 'redux'
import Account from './account'
import Friends from './friends'

const rootReducer = combineReducers({
  Account, Friends
})

export default rootReducer
