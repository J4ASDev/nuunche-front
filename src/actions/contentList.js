import Axios from 'axios'

import { API, requestOpts } from '../lib/axios'
import * as types from './types'

export const getContentPlaylist = () => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(
        `${API.LOCAL}/generic/playlists/details/5b845b8346cc29000e4f186a?itemsPerPage=10`,
        requestOpts
      )

      dispatch({
        type: types.GET_CONTENT_PLAYLIST,
        payload: {
          data,
        },
      })
    } catch (err) {
      console.error(err)
    }
  }
}
