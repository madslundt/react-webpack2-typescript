import { IInfoEntities } from './../panel/api/PanelSchema';
import { combineReducers } from 'redux';
import counters from '../counter/CounterReducer';
import profiles from '../profile/ProfileReducer';
import panels from '../panel/PanelReducer';
import loadingProgress, { IState as loadingProgressState } from './api/loadingReducer';
import CounterActions from '../counter/CounterActions';
import ProfileActions from '../profile/ProfileActions';

export interface IReducers {
    counters: typeof CounterActions,
    profiles: typeof ProfileActions,
    panels: IInfoEntities,
    loadingProgress: loadingProgressState
}

export default combineReducers({
    counters,
    profiles,
    panels,
    loadingProgress
});