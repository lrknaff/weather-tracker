import axios from 'axios'

const Geohelpers = {
  onPositionReceived: (position) => {
    console.log(position)
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=7b05601290f3c029e2162277fc5b288d
`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    // return { lon: position.coords.longitude, lat: position.coords.latitude }
  },
  onPositionFailed: (error) => {
    console.error(new Error('We need to add a JSX element fam'))
  },
}

export default Geohelpers
