import { createAction } from 'redux-actions';

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

const increment = createAction<void>(
  INCREMENT,
  () => {}
);
const decrement = createAction<void>(
  DECREMENT,
  () => {}
);

export default {
  increment,
  decrement
};