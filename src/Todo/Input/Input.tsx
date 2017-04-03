import * as React from 'react';
import TextField from 'material-ui/TextField';

interface TodoInputProperty {
    onSubmit(title: string): void;
}

interface TodoInputState {
    value: string;
}

export class Input extends React.Component <TodoInputProperty, TodoInputState> {
    constructor() {
        super();
        this.state = {
            value: ''
        };

        this.onKeyDown = this.onKeyDown.bind(this)
        this.onChange  = this.onChange.bind(this)
    }

    private submitValue() {
        this
            .props
            .onSubmit(this.state.value);
        this.setState({value: ''});
    }

    onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (!this.state.value) {
            return;
        }

        switch (event.keyCode) {
            case 13: // enter
                this.submitValue();
        }
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <TextField
                type="text"
                name="todoInput"
                value={this.state.value}
                onKeyDown={this.onKeyDown}
                onChange={this.onChange}
            />
        );
    }
}