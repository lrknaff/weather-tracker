import { combineReducers } from 'redux'
import setLocation from './setLocation'
import getCurrentWeather from './getCurrentWeather'

const reducer = combineReducers({ setLocation, getCurrentWeather })

export default reducer
