import * as React from 'react';
import {Input} from './Input/Input';
import {List, TodoListProperty, IItem} from './List/List';

export interface TodoState {
    items: IItem[]
}

export class Todo extends React.Component<void, TodoState> {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    addTodo(title: string): void {
        const todos = this.state.items.concat({
            value: title,
            created: new Date()
        });
        this.setState({items: todos});
    }

    deleteTodo(item: IItem) {
        const idx = this.state.items.indexOf(item);

        if (idx !== -1) {
            const todos = this.state.items;
            todos.splice(idx, 1);
            this.setState({
                items: todos
            });
        }
    }

    render() {
        return (
            <div>
                <Input onSubmit={this.addTodo.bind(this)} />
                <List items={this.state.items} clickItem={this.deleteTodo.bind(this)} />
            </div>
        );
    }
}