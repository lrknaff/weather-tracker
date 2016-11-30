import { combineReducers } from 'redux'
// import child reducers

const exampleReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TEST':
      return state + 1
    default:
      return state
  }
}

const reducer = combineReducers(exampleReducer)

export default reducer
