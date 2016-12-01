import { combineReducers } from 'redux'
import getLocation from './geolocation'
import getWeather from './getWeather'

const reducer = combineReducers({ getLocation, getWeather })

export default reducer
