import { combineReducers } from 'redux'
import setLocation from './setLocation'
import getCurrentWeather from './getCurrentWeather'
import getCurrentWeatherByZip from './getCurrentWeatherByZip'

const reducer = combineReducers({ setLocation, getCurrentWeather, getCurrentWeatherByZip })

export default reducer
