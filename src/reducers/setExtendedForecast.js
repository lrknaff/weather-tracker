const getCurrentWeather = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_EXTENDED':
      return Object.assign({}, state, { location: action.location, temp: action.temp, hourly: action.hourly })
    default:
      return state
  }
}

export default getCurrentWeather
