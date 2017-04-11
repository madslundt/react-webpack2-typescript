import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import CounterActions from './CounterActions'
import Counter, { IState } from './Counter'
import { bindActionCreators } from "redux";
import { IReducers } from "../rootReducers";

interface IProps {
    number: number;
    actions: typeof CounterActions
}


export class CounterPage extends React.Component<IProps, void> {
    constructor(props: IProps) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        console.log('Counter page increment');
        this.props.actions.increment();
    }
    decrement() {
        this.props.actions.decrement();
    }

    render() {
        const { number } = this.props;
        return (
            <div>
                <Counter
                    number={number}
                    increment={this.increment}
                    decrement={this.decrement}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: IReducers) => {
    return state.counters;
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators(CounterActions, dispatch)
    };
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(CounterPage);