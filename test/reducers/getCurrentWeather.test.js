/*eslint-disable*/
import getCurrentWeather from '../../src/reducers/getCurrentWeather'

describe('setLocation reducer', () => {
  it('should return the initial state', () => {
    expect(getCurrentWeather(undefined, {})).toEqual({})
  })

  it('should return the lat and long when given the RECEIVE_LOCATION type', () => {
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

    const action = {
      type: 'RECEIVE_FORECAST',
      location: json.data.name,
      temp: json.data.main.temp,
      weatherType: json.data.weather[0].main,
    }

    const expected = {
      location: 'NicksVille',
      temp: '77',
      weatherType: 'sunny',
    }

    expect(getCurrentWeather({}, action)).toEqual(expected)
  })
})
