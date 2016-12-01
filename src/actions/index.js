import axios from 'axios'

export const receiveLocation = (latitude, longitude) => {
  return {
    type: 'RECEIVE_LOCATION',
    completed: false,
    latitude,
    longitude,
  }
}

const receiveForecast = (json) => {
  return {
    type: 'RECEIVE_FORECAST',
    forecast: json,
  }
}

export const fetchForecast = (position) => {
  // action object
  return (dispatch) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=7b05601290f3c029e2162277fc5b288d
    `)
      .then(data => data.json())
      .then(json => dispatch(receiveForecast(json)))
  }
}

// export const fetchForecast = options => dispatch => {
  // return fetch API call
