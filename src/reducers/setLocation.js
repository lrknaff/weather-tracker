const setLocation = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CURRENT_EXTENDED':
      return [...state, { forecast: action.data }]
    default:
      return state
  }
}

export default setLocation
