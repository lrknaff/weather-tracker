const getCurrentWeatherByZip = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return Object.assign({}, state, { location: action.location, temp: action.temp, weatherType: action.weatherType })
    default:
      return state
  }
}

export default getCurrentWeatherByZip
