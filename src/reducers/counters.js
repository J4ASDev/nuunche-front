import * as types from '../actions/types'

const initialState = {
  counter_1: 0,
  counter_2: 0,
  counter_3: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_OR_DECREMENT: {
      const { id, count } = action.payload

      return {
        ...state,
        [`counter_${id}`]: count,
      }
    }

    default:
      return state
  }
}
