import { Action } from "redux-actions";
import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from "./ajaxStatusActions";

const initialState: number = 0;

const actionTypeEndsInSuccess = (type: string) => type.match(/.+_SUCCESS/g);

const handleActions: any = (state: number = initialState, action: Action<void>) => {
    if (action.type === BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type === AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}

export default handleActions;