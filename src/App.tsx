import * as React from 'react';
import { Counter } from './Counter/Counter';

export default class App extends React.Component<void, void> {
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}