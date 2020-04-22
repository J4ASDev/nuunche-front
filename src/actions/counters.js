import * as types from './types'

export const onSubtractOrAdd = (id, count) => ({
  type: types.INCREMENT_OR_DECREMENT,
  payload: {
    id,
    count,
  },
})
