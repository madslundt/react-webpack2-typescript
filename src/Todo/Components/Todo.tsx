import * as React from 'react';
import Input from './Input';
import List, {TodoListProperty} from './List';
import {ITodo} from '../model';
import { Grid, Row, Col } from 'react-flexbox-grid';

export interface TodoState {
    items : ITodo[]
}

export default class Todo extends React.Component <void, TodoState> {
    constructor() {
        super();
        this.state = {
            items: []
        };

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(title : string) : void {
        const todos = this
            .state
            .items
            .concat({value: title, created: new Date()});
        this.setState({items: todos});
    }

    deleteTodo(item : ITodo) {
        const idx = this
            .state
            .items
            .indexOf(item);

        if (idx !== -1) {
            const todos = this.state.items;
            todos.splice(idx, 1);
            this.setState({items: todos});
        }
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs>
                        <Input
                            onSubmit={this.addTodo}/>
                    </Col>
                    <Col xs>
                        <List
                            items={this.state.items}
                            clickItem={this.deleteTodo}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
