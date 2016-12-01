import { combineReducers } from 'redux'
import setLocation from './setLocation'
import getCurrentWeather from './getWeather'

const reducer = combineReducers({ setLocation, getCurrentWeather })

export default reducer
