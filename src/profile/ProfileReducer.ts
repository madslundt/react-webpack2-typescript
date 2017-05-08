import { handleActions, Action } from "redux-actions";
import { LOAD_PROFILE_SUCCESS, LOAD_PROFILE_REQUEST, LOAD_PROFILE_ERROR } from "./ProfileActions";
import { IProfileApi } from "./ProfileMockApi";

const initialState: any = {
    id: null,
    error: null,
    isRequesting: false
};

export interface IProfile extends IProfileApi {
    id: string,
    error: any,
    isRequesting: Boolean
};

export default handleActions<IProfile, IProfile>({
    [LOAD_PROFILE_SUCCESS]: (state: IProfileApi, action: Action<IProfileApi>): IProfile | undefined => {
        return {
            ...action.payload,
            error: null,
            isRequesting: false
        };
    },
    [LOAD_PROFILE_REQUEST]: (state: any, action: any): any => {
        return {
            id: action.payload,
            error: null,
            isRequesting: true
        };
    },
    [LOAD_PROFILE_ERROR]: (state: any, action: Action<string>): any => {
        return {
            error: action.payload,
            isRequesting: false
        };
    }
}, initialState);