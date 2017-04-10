import { combineReducers } from 'redux'
import todo from './todo/TodoReducer'
import counter from './counter/CounterReducer'

export default combineReducers({
  todo,
  counter
});