const setLocation = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_LOCATION':
      return Object.assign({}, { latitude: action.latitude, longitude: action.longitude })
    default:
      return state
  }
}

export default setLocation
