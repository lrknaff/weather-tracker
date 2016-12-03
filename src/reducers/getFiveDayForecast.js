const getFiveDayForecast = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FIVEDAY_FORECAST':
      return [...state, { forecast: action.data }]
    default:
      return state
  }
}

export default getFiveDayForecast
