import { createAction, Action } from 'redux-actions';
import {ITodo} from './model'


import {
  ADD_TODO,
  DELETE_TODO,
} from './reducer';

const addTodo = createAction<ITodo, string>(
  ADD_TODO,
  (value: string) => ({ value, created: new Date() })
);

const deleteTodo = createAction<ITodo, ITodo>(
  DELETE_TODO,
  (todo: ITodo) => todo
);

export {
  addTodo,
  deleteTodo
}