import getCurrentWeatherByZip from '../../src/reducers/getCurrentWeatherByZip'

describe('getCurrentWeatherByZip reducer', () => {
  it('should return the initial state', () => {
    expect(getCurrentWeatherByZip(undefined, [])).toEqual([])
  })

  it('should return the lat and long when given the RECEIVE_LOCATION type', () => {
    const json = {
      data: {
        name: 'Austin',
        main: {
          temp: '101',
        },
        weather: [
          {
            main: 'extremely hot',
          },
        ],
      },
    }

    const action = {
      type: 'RECEIVE_FORECAST_ZIP',
      location: json.data.name,
      temp: json.data.main.temp,
      weatherType: json.data.weather[0].main,
    }

    const expected = [{
      location: 'Austin',
      temp: '101',
      weatherType: 'extremely hot',
    }]

    expect(getCurrentWeatherByZip([], action)).toEqual(expected)
  })

  xit('should remove the correct city when given the REMOVE_PINNED_CITY type', () => {
    const state = [
      {
        forecast: {
          a: {
            temp: '77',
          },
          b: {
            temp: '90',
          },
          c: {
            temp: '58',
          },
        },
      },
    ]

    const action = {
      type: 'REMOVE_PINNED_CITY',
      index: 0,
    }

    const expected = [
      {
        'forecast': {
          'a': {
            'temp': '90',
          },
          'b': {
            'temp': '58' },
        },
      },
    ]

    expect(getCurrentWeatherByZip(state, action)).toEqual(expected)
  })
})
