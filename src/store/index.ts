import { combineReducers, createStore } from 'redux'
import spinner from './spinner/reducer'
import pais from './pais/reducer'

const store = createStore(
  combineReducers({
    spinner,
    pais
  })
)

export default store
