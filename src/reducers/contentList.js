import * as types from '../actions/types'

const initialState = {
  playlist: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTENT_PLAYLIST: {
      const { data } = action.payload
      const { items } = data

      return {
        ...state,
        playlist: items,
      }
    }

    default:
      return state
  }
}
