import { createAction } from 'redux-actions';
export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';

export const beginAjaxCall = createAction<void>(
  BEGIN_AJAX_CALL,
  () => { }
);

export const ajaxCallError = createAction<any, any>(
  AJAX_CALL_ERROR,
  (error) => error
);