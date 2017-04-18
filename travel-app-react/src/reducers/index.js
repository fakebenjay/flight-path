import { combineReducers } from 'redux'
import Account from './account'
import Friends from './friends'
import Location from './location'

const rootReducer = combineReducers({
  Account, Friends, Location
})

export default rootReducer
