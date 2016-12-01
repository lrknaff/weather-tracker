import getCurrentWeather from '../../src/reducers/getCurrentWeather'

describe('setLocation reducer', () => {
  it('should return the initial state', () => {
    expect(getCurrentWeather(undefined, {})).toEqual({})
  })

  it('should return the lat and long when given the RECEIVE_LOCATION type', () => {
    const json = {
      data: {
        weather: 'sunny', temp: '77', name: 'NicksVille',
      },
    }

    const action = {
      type: 'RECEIVE_FORECAST',
      forecast: json,
    }

    const expected = {
      weather: 'sunny', temp: '77', name: 'NicksVille',
    }

    expect(getCurrentWeather({}, action)).toEqual(expected)
  })
})
