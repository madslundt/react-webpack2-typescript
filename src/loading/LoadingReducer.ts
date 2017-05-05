import { Action } from "redux-actions";
import { START_LOADING } from "./LoadingActions";

export interface IState {
    number: number,
    types: string[]
};

const initialState: IState = {
    number: 0,
    types: []
};

const actionTypeEnds = (type: string) => type.match(/.+_(SUCCESS|ERROR)/g);

const getFeatureString = (type: string | undefined): string => {
    if (type) {
        return type.replace(/_(REQUEST|SUCCESS|ERROR)/g, '');
    } else {
        return '';
    }
}

const handleActions: any = (state = initialState, action: Action<string>) => {
    const actionType = getFeatureString(action.type);

    if (action.type === START_LOADING) {
        const actionPayload = getFeatureString(action.payload);
        let types: string[] = state.types;
        if (actionPayload) {
            types = [...types, actionPayload];
        }
        return {
            ...state,
            types: types,
            number: state.number + 1
        };
    } else if (actionTypeEnds(action.type) && state.types.indexOf(actionType) !== -1) {
        return {
            types: state.types.filter(s => s !== actionType),
            number: state.number - 1
        };
    }

    return state;
}

export default handleActions;