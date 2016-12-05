import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Settings extends Component {

  render() {
    const { state, removePinnedCity, fetchForecastByZip } = this.props

    let input
    const cities = state.getCurrentWeatherByZip ?
                   state.getCurrentWeatherByZip.map((city, i) => {
                     return (
                       <div key={i}>
                         <button
                           className="remove-button"
                           onClick={() => removePinnedCity(i)} // pass in id
                         >
                           X
                         </button>
                         <p className="location">{city.location}</p>
                       </div>
                     )
                   }) :
                   null

    return (
      <div className="settings-container">
        <h1 className="settings-headline">My Cities</h1>
        {cities}
        <input
          type="number"
          placeholder="Enter a zip code"
          value={input}
          ref={(node) => { input = node }}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            fetchForecastByZip(input.value)
            input.value = ''
          }}
          className="add-city-button"
        >Submit</button>
        <p className="back-to-home-link-from-settings"><Link to="/">Back to Home &raquo;</Link></p>
      </div>
    )
  }
  }


export default Settings


// const Settings = ({ fetchForecastByZip, state, removePinnedCity }) => {
//   let input
//   const cities = state.getCurrentWeatherByZip ?
//                  state.getCurrentWeatherByZip.map((city, i) => {
//                    return (
//                      <div key={i}>
//                        <button
//                          className="remove-button"
//                          onClick={() => removePinnedCity(i)} // pass in id
//                        >
//                          X
//                        </button>
//                        <p className="location">{city.location}</p>
//                      </div>
//                    )
//                  }) :
//                  null
//
// //   return (
// //     <div className="settings-container">
// //       <h1 className="settings-headline">My Cities</h1>
// //       {cities}
// //       <input
// //         type="number"
// //         placeholder="Enter a zip code"
// //         value={input}
// //         ref={(node) => { input = node }}
// //       />
// //       <button
// //         onClick={(e) => {
// //           e.preventDefault()
// //           fetchForecastByZip(input.value)
// //           input.value = ''
// //         }}
// //         className="add-city-button"
// //       >Submit</button>
// //       <p className="back-to-home-link-from-settings"><Link to="/">Back to Home &raquo;</Link></p>
// //     </div>
// //   )
// // }
//
// Settings.propTypes = {
//   fetchForecastByZip: PropTypes.func.isRequired,
//   removePinnedCity: PropTypes.func.isRequired,
// }
//
// export default Settings
