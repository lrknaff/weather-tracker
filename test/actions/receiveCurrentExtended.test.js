import * as actions from '../../src/actions'

describe('receive forecast action', () => {
  it('should return a forecast array with a, b, c, d', () => {
    const json = {
      data: {
        list: [
          {
            dt: 1902020222,
            dt_txt: '2016-12-04',
          },
          {
            dt: 190303033,
            dt_txt: '2016-12-04',
          },
          {
            dt: 333233333,
            dt_txt: '2016-12-04',
          },
          {
            dt: 190203030,
            dt_txt: '2016-12-04',
          },
        ],
      },
    }

    const expected = {
      type: 'RECEIVE_CURRENT_EXTENDED',
      data: {
        a: [],
        b: [],
        c: [],
        d: [],
      },
    }

    expect(actions.receiveCurrentExtendedForecast(json)).toEqual(expected)
  })
})
