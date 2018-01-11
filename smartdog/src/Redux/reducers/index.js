import { combineReducers } from 'redux'
import counter from './counter'
import animal from './animal'

const reducersCombined = combineReducers({
  counter,
  animal
})

export default reducersCombined
