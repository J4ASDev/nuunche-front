import * as types from '../actions/types'

const initialState = {
  detailsMedia: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DETAILS_MEDIA: {
      const { data } = action.payload

      return {
        ...state,
        detailsMedia: data,
      }
    }

    default:
      return state
  }
}
