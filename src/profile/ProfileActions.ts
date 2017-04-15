import { createAction } from 'redux-actions';
import { Dispatch } from 'react-redux';
import profileApi, { IProfileApi } from './ProfileMockApi';
import { beginAjaxCall, ajaxCallError } from '../infrastructure/api/ajaxStatusActions';

export const LOAD_PROFILE_SUCCESS = "LOAD_PROFILE_SUCCESS";

const loadProfileSuccess = createAction<IProfileApi, IProfileApi>(
  LOAD_PROFILE_SUCCESS,
  (profile: IProfileApi) => {
      return profile;
  }
);

const loadProfile = (id: string) => (dispatch: Dispatch<IProfileApi>) => {
    dispatch(beginAjaxCall());
    return profileApi.getProfile(id).then(profile  => {
        dispatch(loadProfileSuccess(profile));
    }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
    });
};

export interface IProfileActions {
    loadProfileSuccess: typeof loadProfileSuccess,
    loadProfile(id: string): Promise<IProfileApi>
}

export default {
  loadProfileSuccess,
  loadProfile
};
