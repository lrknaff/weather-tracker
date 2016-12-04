import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

class FiveDay extends Component {

  getMinAndMax(arr, day) {
    const temps = day.map((hour) => {
      return arr.push(Math.floor(convertKelvinToFahrenheit(hour.temp)))
    })
  }

  render() {
    let data
    const { state, id } = this.props

    if (state.getFiveDayForecast[id]) {
      const one = []
      const two = []
      const three = []
      const four = []

      const dayOne = state.getFiveDayForecast[id].forecast.dayOne
      const dayTwo = state.getFiveDayForecast[id].forecast.dayTwo
      const dayThree = state.getFiveDayForecast[id].forecast.dayThree
      const dayFour = state.getFiveDayForecast[id].forecast.dayFour

      this.getMinAndMax(one, dayOne)
      this.getMinAndMax(two, dayTwo)
      this.getMinAndMax(three, dayThree)
      this.getMinAndMax(four, dayFour)

      data = (
        <div>
          <ul>
            <li>{state.getFiveDayForecast[id].forecast.dayOne[id].day}</li>
            <li>{state.getFiveDayForecast[id].forecast.dayTwo[id].day}</li>
            <li>{state.getFiveDayForecast[id].forecast.dayThree[id].day}</li>
            <li>{state.getFiveDayForecast[id].forecast.dayFour[id].day}</li>
          </ul>
          <ul>
            <li>{Math.max(...one)}&deg; / {Math.min(...one)}&deg;</li>
            <li>{Math.max(...two)}&deg; / {Math.min(...two)}&deg;</li>
            <li>{Math.max(...three)}&deg; / {Math.min(...three)}&deg;</li>
            <li>{Math.max(...four)}&deg; / {Math.min(...four)}&deg;</li>
          </ul>
        </div>
      )
    } else {
      data = (
        <h2>Loading...</h2>
      )
    }
    return (
      <div>
        {data}
      </div>
    )
  }
}

export default FiveDay
