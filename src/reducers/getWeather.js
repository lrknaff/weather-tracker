const getWeather = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return Object.assign({}, action.forecast.data)
    default:
      return state
  }
}

export default getWeather
