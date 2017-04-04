import {ITodo, IState} from './model';
import {handleActions, Action} from "redux-actions";

export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"

const initialState: ITodo[] = [];

export default handleActions<IState, ITodo>({
    [ADD_TODO]: (state: ITodo[], action: Action<ITodo>): ITodo[] => {
        if (!action.payload) {
            return [];
        }
        return [{
            value: action.payload.value,
            created: action.payload.created
        }, ...state];
    },
    [DELETE_TODO]: (state: ITodo[], action: Action<ITodo>): ITodo[] => {
        return state.filter(todo => todo !== action.payload);
    }
}, initialState);