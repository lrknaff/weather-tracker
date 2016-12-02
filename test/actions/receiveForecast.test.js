/*eslint-disable*/
import * as actions from '../../src/actions'

describe('receive forecast action', () => {
  it('should return a forecast object with weather data', () => {
    const json = {
      data: {
        name: 'NicksVille',
        main: {
          temp: '77',
        },
        weather: [
          {
            main: 'sunny',
          },
        ],
      },
    }

    const expected = {
      type: 'RECEIVE_FORECAST',
      location: json.data.name,
      temp: json.data.main.temp,
      weatherType: json.data.weather[0].main,
    }

    expect(actions.receiveForecast(json)).toEqual(expected)
  })
})
