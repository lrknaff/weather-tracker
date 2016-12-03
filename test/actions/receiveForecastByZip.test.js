import * as actions from '../../src/actions'

describe('receive forecast action', () => {
  it('should return a forecast object with weather data', () => {
    const json = {
      data: {
        name: 'Bozeman',
        main: {
          temp: '77',
        },
        weather: [
          {
            main: 'clouds',
          },
        ],
      },
    }

    const expected = {
      type: 'RECEIVE_FORECAST_ZIP',
      location: json.data.name,
      temp: json.data.main.temp,
      weatherType: json.data.weather[0].main,
    }

    expect(actions.receiveForecastByZip(json)).toEqual(expected)
  })
})
