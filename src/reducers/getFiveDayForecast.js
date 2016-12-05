const getFiveDayForecast = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FIVEDAY_FORECAST':
      return [...state, { forecast: action.data }]
    case 'REMOVE_PINNED_CITY':
      return [
        ...state,
      ]
    default:
      return state
  }
}

export default getFiveDayForecast
