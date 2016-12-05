import setLocation from '../../src/reducers/setLocation'

describe('setLocation reducer', () => {
  it('should return the initial state', () => {
    expect(setLocation(undefined, [])).toEqual([])
  })

  it('should return state with data when given the RECEIVE_CURRENT_EXTENDED type', () => {
    const action = {
      type: 'RECEIVE_CURRENT_EXTENDED',
      data: {
        a: [
          {
            time: '6 AM',
            main: 'Clouds',
          },
        ],
        b: [
          {
            time: '9 AM',
            main: 'Clouds',
          },
        ],
      },
    }

    const expected = [
      {
        forecast: {
          a: [
            {
              time: '6 AM',
              main: 'Clouds',
            },
          ],
          b: [
            {
              time: '9 AM',
              main: 'Clouds',
            },
          ],
        },
      },
    ]

    expect(setLocation([], action)).toEqual(expected)
  })
})
