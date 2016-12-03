import { combineReducers } from 'redux'
import setLocation from './setLocation'
import getCurrentWeather from './getCurrentWeather'
import getCurrentWeatherByZip from './getCurrentWeatherByZip'
import getFiveDayForecast from './getFiveDayForecast'

const reducer = combineReducers({ setLocation, getCurrentWeather, getCurrentWeatherByZip, getFiveDayForecast })

export default reducer
