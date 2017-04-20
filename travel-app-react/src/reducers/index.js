import { combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import Account from './account'
import Friends from './friends'
import Location from './location'
import Trip from './trips'
import CurrentTrip from './currentTrip'
import { rMiddleware } from '../store'

const rootReducer = combineReducers({
  Account, Friends, Location, Trip, router: routerReducer, CurrentTrip
})

export default rootReducer
