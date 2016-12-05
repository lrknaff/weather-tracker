import * as actions from '../../src/actions'

describe('remove pinned city action', () => {
  it('should return remove object', () => {
    const index = 1

    const expected = {
      type: 'REMOVE_PINNED_CITY',
      index,
    }

    expect(actions.removePinnedCity(index)).toEqual(expected)
  })
})
