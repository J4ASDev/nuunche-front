import { combineReducers } from 'redux'

import contentList from './contentList'
import counters from './counters'
import details from './details'

const reducers = combineReducers({
  contentList,
  counters,
  details,
})

export default reducers
