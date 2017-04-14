import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export interface IState {
    readonly number: number
};

export interface IProps extends IState {
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
