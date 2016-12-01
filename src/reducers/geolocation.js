const getLocation = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_LOCATION':
      return Object.assign({}, ...state)
    default:
      return state
  }
}

export default getLocation
