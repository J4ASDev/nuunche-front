import Axios from 'axios'

import { API, requestOpts } from '../lib/axios'
import * as types from './types'

export const getDetailMedia = (mediaId) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(
        `${API.LOCAL}/ott/contents/details/${mediaId}`,
        requestOpts
      )

      dispatch({
        type: types.GET_DETAILS_MEDIA,
        payload: {
          data,
        },
      })
    } catch (err) {
      console.error(err)
    }
  }
}
