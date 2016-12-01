const getWeather = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return Object.assign({}, 'hi')
    default:
      return state
  }
}

export default getWeather
