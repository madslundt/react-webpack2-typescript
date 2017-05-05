import { handleActions, Action } from "redux-actions";
import { LOAD_PANEL_INFO_SUCCESS, LOAD_PANEL_INFO_ERROR, LOAD_PANEL_INFO_REQUEST } from "./PanelActions";
import { IPanelInfoApi } from "./api/PanelModel";
import { denormalize } from 'normalizr';
import { IInfoEntities } from './api/PanelSchema';

const initialState: IInfoEntities & {fetching: boolean} = {
    categories: {},
    relations: {},
    traits: {},
    fetching: false
};

export default handleActions<IInfoEntities, IInfoEntities>({
    [LOAD_PANEL_INFO_SUCCESS]: (state: IInfoEntities, action: Action<IInfoEntities>): IInfoEntities | {} => {
        return {
            ...action.payload,
            fetching: false
        };
    },
    [LOAD_PANEL_INFO_REQUEST]: (state: IInfoEntities, action: Action<void>): IInfoEntities | {} => {
        return {
            ...state,
            fetching: true
        };
    },
    [LOAD_PANEL_INFO_ERROR]: (state: IInfoEntities, action: Action<any>): IInfoEntities | {} => {
        console.log(action);
        return {
            ...state,
            error: action.payload,
            fetching: false
        };
    }
}, initialState);