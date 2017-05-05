import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';
import { IInfoEntities, info } from './api/PanelSchema';
import { Dispatch } from 'react-redux';
import PanelApi from './api/PanelMock';
import { IPanelInfoApi } from './api/PanelModel';
import { startLoading } from '../loading/LoadingActions';

export const LOAD_PANEL_INFO_REQUEST = "LOAD_PANEL_INFO_REQUEST";
export const LOAD_PANEL_INFO_SUCCESS  = "LOAD_PANEL_INFO_SUCCESS";
export const LOAD_PANEL_INFO_ERROR = "LOAD_PANEL_INFO_ERROR";

const loadPanelInfoRequest = createAction<void>(
  LOAD_PANEL_INFO_REQUEST,
  () => {}
);
const loadPanelInfoError = createAction<any, any>(
  LOAD_PANEL_INFO_ERROR,
  (error: any) => error
);
const loadPanelInfoSuccess = createAction<IInfoEntities, IInfoEntities>(
  LOAD_PANEL_INFO_SUCCESS,
  (info: IInfoEntities) => info
);

const loadPanelInfo = () => (dispatch: Dispatch<IPanelInfoApi>) => {
    dispatch(startLoading(LOAD_PANEL_INFO_REQUEST));
    dispatch(loadPanelInfoRequest());

    return PanelApi.getPanelInfo().then(panelInfo => {
        const normalizedData: IInfoEntities = normalize(panelInfo, info).entities;
        dispatch(loadPanelInfoSuccess(normalizedData));
    }).catch(error => {
        dispatch(loadPanelInfoError(error));
        throw(error);
    });
};

export interface IPanelActions {
    loadPanelInfoSuccess: typeof loadPanelInfoSuccess,
    loadPanelInfo(): Promise<void>
}

export default {
  loadPanelInfoSuccess,
  loadPanelInfo
};
