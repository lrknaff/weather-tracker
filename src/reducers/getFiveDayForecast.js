const getFiveDayForecast = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FIVEDAY_FORECAST':
      return [...state, { forecast: action.forecast }]
    default:
      return state
  }
}

export default getFiveDayForecast
