const exampleReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TEST':
      return state + 1
    default:
      return state
  }
}

export default exampleReducer
