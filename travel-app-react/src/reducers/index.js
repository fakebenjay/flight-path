import { combineReducers } from 'redux'
import Account from './account'
import Friends from './friends'
import Location from './location'
import Trip from './trips'

const rootReducer = combineReducers({
  Account, Friends, Location, Trip
})

export default rootReducer
