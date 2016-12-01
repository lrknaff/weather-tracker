import axios from 'axios'

export const receiveLocation = (position) => {
  console.log('position in receive', position)
  return {
    type: 'RECEIVE_LOCATION',
    completed: false,
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  }
}

const receiveForecast = (json) => {
  return {
    type: 'RECEIVE_FORECAST',
    forecast: json,
  }
}

export const fetchForecast = (position) => {
  return (dispatch) => {
    dispatch(receiveLocation(position))
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=7b05601290f3c029e2162277fc5b288d
    `)
      .then(json => {
        console.log(json)
        dispatch(receiveForecast(json))
      })
      .catch(error => console.error('Error with api call...', error.message))
  }
}
