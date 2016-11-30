export const receiveLocation = (latitude, longitude) => {
  return {
    type: 'RECEIVE_LOCATION',
    completed: false,
    latitude,
    longitude,
  }
}

export const promptUser = () => {
  return {
    type: 'PROMPT_USER',
    permission: false,
  }
}

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'

export const receiveForecast = (forecastData) => ({
  // action object
})

export const fetchForecast = options => dispatch => {
  // return fetch API call
}
