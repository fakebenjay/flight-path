import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Account from './account'
import Friends from './friends'
import Location from './location'
import Trip from './trips'
import CurrentTrip from './currentTrip'
import activitySearch from './activitySearch'

const rootReducer = combineReducers({
  Account, Friends, Location, Trip, router: routerReducer, activitySearch, CurrentTrip
})

export default rootReducer
