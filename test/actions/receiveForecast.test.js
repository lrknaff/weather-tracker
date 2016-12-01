import * as actions from '../../src/actions'

describe('receive forecast action', () => {
  it('should return a forecast object with weather data', () => {
    const json = {
      name: 'Denver',
      temp: '77',
      summary: 'Cloudy with rain',
    }

    const expected = {
      type: 'RECEIVE_FORECAST',
      forecast: json,
    }

    expect(actions.receiveForecast(json)).toEqual(expected)
  })
})
