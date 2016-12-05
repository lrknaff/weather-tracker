const getCurrentWeatherByZip = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST_ZIP':
      return [...state, { location: action.location, temp: action.temp, weatherType: action.weatherType }]
    case 'REMOVE_PINNED_CITY':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
    default:
      return state
  }
}

export default getCurrentWeatherByZip
