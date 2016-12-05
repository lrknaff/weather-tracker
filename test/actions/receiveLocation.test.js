import * as actions from '../../src/actions'

describe('receive location action', () => {
  it('should return a forecast for current location', () => {
    const position = {
      coords: {
        latitude: 33.3333333,
        longitude: 43.122122,
      },
    }

    const expected = {
      type: 'RECEIVE_LOCATION',
      completed: false,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }

    expect(actions.receiveLocation(position)).toEqual(expected)
  })
})
