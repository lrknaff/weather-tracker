const getWeather = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      console.log('hi')
      return Object.assign({}, 'hi')
    default:
      return state
  }
}

export default getWeather
