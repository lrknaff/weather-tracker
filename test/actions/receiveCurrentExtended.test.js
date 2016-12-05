import * as actions from '../../src/actions'
import data from '../helpers/fakeJSON'

describe('receive forecast action', () => {
  it('should return a forecast array with a, b, c, d', () => {
    const expected = {
      type: 'RECEIVE_CURRENT_EXTENDED',
      data: {
        a: [
          {
            time: '0 AM',
            date: '2016-12-06',
            day: 'Tuesday',
            temp: 275.97,
            main: 'Clear',
            description: 'clear sky',
          },
        ],
        b: [],
        c: [],
        d: [],
      },
    }

    expect(actions.receiveCurrentExtendedForecast(data)).toEqual(expected)
  })
})
