import { createAction } from 'redux-actions';
import { Dispatch } from 'react-redux';
import profileApi, { IProfileApi } from './ProfileMockApi';
import { startLoading } from '../infrastructure/api/loadingActions';

export const LOAD_PROFILE_SUCCESS = "LOAD_PROFILE_SUCCESS";

const loadProfileSuccess = createAction<IProfileApi, IProfileApi>(
  LOAD_PROFILE_SUCCESS,
  (profile: IProfileApi) => profile
);

const loadProfile = (id: string) => (dispatch: Dispatch<IProfileApi>) => {
    dispatch(startLoading(LOAD_PROFILE_SUCCESS));
    return profileApi.getProfile(id).then(profile => {
        dispatch(loadProfileSuccess(profile));
    }).catch(error => {
        throw(error);
    });
};

export interface IProfileActions {
    loadProfileSuccess: typeof loadProfileSuccess,
    loadProfile(id: string): Promise<void>
}

export default {
  loadProfileSuccess,
  loadProfile
};
