
const Geohelpers = {
  onPositionReceived: (position) => {
    console.log(position)
  },
  onPositionFailed: (error) => {
    console.error(new Error('We need to add a JSX element fam'))
  },
}

export default Geohelpers
