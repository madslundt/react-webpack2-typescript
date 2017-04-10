import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import CounterActions from './CounterActions'
import Counter, { IState } from './Counter'
import { bindActionCreators } from "redux";
import { IReducers } from "../rootReducers";

interface props {
    number: number;
    dispatch: Dispatch<{}>
}


export class CounterPage extends React.Component<props, void> {
    render() {
        const { number, dispatch } = this.props;
        return (
            <div>
                <Counter
                    number={number}
                    increment={() => dispatch(CounterActions.increment())}
                    decrement={() => dispatch(CounterActions.decrement())}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: IReducers) => {
    return state.counters;
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return bindActionCreators(CounterActions, dispatch);
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Counter);