import * as types from '../actions/types'

const initialState = {
  countersList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COUNTERS: {
      const { counters } = action.payload

      return {
        ...state,
        countersList: counters,
      }
    }

    default:
      return state
  }
}
