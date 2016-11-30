
const Geohelpers = {
  onPositionReceived: (position) => {
    console.log(position)
  },
  onPositionFailed: (error) => {
    console.error(error)
  },
}

export default Geohelpers
