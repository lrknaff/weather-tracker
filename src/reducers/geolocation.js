const getLocation = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_LOCATION':
      return Object.assign({}, state, { latitude: action.latitude, longitude: action.longitude })
    default:
      return state
  }
}

export default getLocation
