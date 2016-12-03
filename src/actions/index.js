import axios from 'axios'

const API_KEY = 'APPID=7b05601290f3c029e2162277fc5b288d'

export const receiveLocation = (position) => {
  return {
    type: 'RECEIVE_LOCATION',
    completed: false,
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  }
}

export const receiveForecast = (json) => {
  return {
    type: 'RECEIVE_FORECAST',
    location: json.data.name,
    temp: json.data.main.temp,
    weatherType: json.data.weather[0].main,
  }
}

export const receiveForecastByZip = (json) => {
  return {
    type: 'RECEIVE_FORECAST_ZIP',
    location: json.data.name,
    temp: json.data.main.temp,
    weatherType: json.data.weather[0].main,
  }
}

export const receiveFiveDayForecast = (json) => {
  console.log(json.data.city.name)
  return {
    type: 'RECEIVE_FIVEDAY_FORECAST',
    forecast: json.data.city.name,
  }
}

export const updateLocation = (position) => {
  return (dispatch) => {
    return dispatch(receiveLocation(position))
  }
}

export const fetchForecast = (position) => {
  return (dispatch) => {
    return axios.get(`
      http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&${API_KEY}
    `)
      .then(json => {
        dispatch(receiveForecast(json))
      })
      .catch(error => console.error('Error with api call...', error.message))
  }
}
export const fetchFiveDay = (city) => {
  return (dispatch) => {
    return axios.get(`
      http://api.openweathermap.org/data/2.5/forecast?q=${city},us&${API_KEY}
      `)
      .then(json => {
        dispatch(receiveFiveDayForecast(json))
      })
      .catch(error => console.error('Error with api call...', error.message))
  }
}
export const fetchForecastByZip = (zip) => {
  return (dispatch) => {
    return axios.get(`
    http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&${API_KEY}
    `)
      .then(json => {
        dispatch(receiveForecastByZip(json))
        return json
      })
      .then(json => {
        dispatch(fetchFiveDay(json.data.name))
      })
      .catch(error => console.error('Error with api call...', error.message))
  }
}
