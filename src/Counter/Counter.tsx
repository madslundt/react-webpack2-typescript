import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'redux-actions';
import CounterActions from './CounterActions';
import RaisedButton from 'material-ui/RaisedButton';

export interface IState {
    number: number
};

export interface IProps {
    readonly number: number;
    increment(): void;
    decrement(): void;
}

// Dumb/stateless component
const Counter = (props: IProps) => {
    const { number, increment, decrement } = props;
    return (
        <div>
            <p>Counter: {number}</p>
            <RaisedButton onClick={increment} label="Increment" />
            <RaisedButton onClick={decrement} label="Decrement" />
        </div>
    );
}

export default Counter;
