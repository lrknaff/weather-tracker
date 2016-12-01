import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as actions from '../../src/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchForecast action', () => {
  it('placeholder test', () => {
    expect(true).toEqual(true)
  })
})
