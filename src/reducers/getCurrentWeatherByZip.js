const getCurrentWeatherByZip = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST_ZIP':
      return [...state, { location: action.location, temp: action.temp, weatherType: action.weatherType }]
    default:
      return state
  }
}

export default getCurrentWeatherByZip
