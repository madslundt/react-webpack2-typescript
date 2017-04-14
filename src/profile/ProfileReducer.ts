import { handleActions, Action } from "redux-actions";
import { LOAD_PROFILE_SUCCESS } from "./ProfileActions";
import { IProfileApi } from "./ProfileMockApi";

const initialState: any = {};

export default handleActions<IProfileApi, IProfileApi>({
    [LOAD_PROFILE_SUCCESS]: (state: IProfileApi, action: Action<IProfileApi>): IProfileApi | undefined => {
        return action.payload;
    }
}, initialState);