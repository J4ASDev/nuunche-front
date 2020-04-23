import * as types from './types'

export const setCounters = (counters) => ({
  type: types.SET_COUNTERS,
  payload: {
    counters,
  },
})
