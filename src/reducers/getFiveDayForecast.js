const getFiveDayForecast = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FIVEDAY_FORECAST':
      return [...state, { forecast: action.data }]
    case 'REMOVE_PINNED_CITY':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
    default:
      return state
  }
}

export default getFiveDayForecast
