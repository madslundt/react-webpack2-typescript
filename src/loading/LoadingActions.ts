import { createAction } from 'redux-actions';
export const START_LOADING = 'START_LOADING';
export const LOADING_ERROR = 'LOADING_ERROR';

export const startLoading = createAction<string, string>(
  START_LOADING,
  (type: string) => type
);