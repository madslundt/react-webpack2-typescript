import { combineReducers } from 'redux';
import counters from '../counter/CounterReducer';
import profiles from '../profile/ProfileReducer';
import ajaxCallsInProgressCount from './api/ajaxStatusReducer';
import CounterActions from '../counter/CounterActions';
import ProfileActions from '../profile/ProfileActions';

export interface IReducers {
  counters: typeof CounterActions,
  profiles: typeof ProfileActions,
  ajaxCallsInProgressCount: number
}

export default combineReducers({
  counters,
  profiles,
  ajaxCallsInProgressCount
});