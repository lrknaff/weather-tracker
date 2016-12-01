import setLocation from '../../src/reducers/setLocation'

describe('setLocation reducer', () => {
  it('should return the initial state', () => {
    expect(setLocation(undefined, {})).toEqual({})
  })

  it('should return the lat and long when given the RECEIVE_LOCATION type', () => {
    const action = {
      type: 'RECEIVE_LOCATION',
      completed: false,
      latitude: 33.33345,
      longitude: 11.1111,
    }

    const expected = {
      latitude: 33.33345,
      longitude: 11.1111,
    }
    expect(setLocation({}, action)).toEqual(expected)
  })
})
