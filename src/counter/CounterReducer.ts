import { handleActions, Action } from "redux-actions";
import { INCREMENT, DECREMENT } from "./CounterActions";
import { IState } from "./Counter";

const initialState: IState = {
    number: 5
};

export default handleActions<IState, void>({
    [INCREMENT]: (state: IState, action: Action<void>): IState => {
        return {
            number: state.number + 1
        };
    },
    [DECREMENT]: (state: IState, action: Action<void>): IState => {
        return {
            number: state.number - 1
        };
    }
}, initialState);