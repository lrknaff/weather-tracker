import { combineReducers } from 'redux'
import setLocation from './setLocation'
import getWeather from './getWeather'

const reducer = combineReducers({ setLocation, getWeather })

export default reducer
