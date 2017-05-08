import { createAction } from 'redux-actions';
import { Dispatch } from 'react-redux';
import profileApi, { IProfileApi } from './ProfileMockApi';
import { startLoading } from '../loading/LoadingActions';

export const LOAD_PROFILE_REQUEST = "LOAD_PROFILE_REQUEST";
export const LOAD_PROFILE_SUCCESS = "LOAD_PROFILE_SUCCESS";
export const LOAD_PROFILE_ERROR = "LOAD_PROFILE_ERROR";

const loadProfileRequest = createAction<void>(
  LOAD_PROFILE_REQUEST,
  () => {}
);

const loadProfileError = createAction<any, any>(
  LOAD_PROFILE_ERROR,
  (error: any) => error
);

const loadProfileSuccess = createAction<IProfileApi, IProfileApi>(
  LOAD_PROFILE_SUCCESS,
  (profile: IProfileApi) => profile
);

const loadProfile = (id: string) => (dispatch: Dispatch<IProfileApi>) => {
    dispatch(startLoading(LOAD_PROFILE_SUCCESS));
    dispatch(loadProfileRequest());

    return profileApi.getProfile(id).then(profile => {
        dispatch(loadProfileSuccess(profile));
    }).catch(error => {
        dispatch(loadProfileError(error));
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
