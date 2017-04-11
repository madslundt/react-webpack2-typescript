import { combineReducers } from 'redux'
import counters from '../counter/CounterReducer'
import CounterActions from '../counter/CounterActions';

export interface IReducers {
  counters: typeof CounterActions
}

export default combineReducers({
  counters
});