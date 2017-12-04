import {SUCCESS, FAIL, START} from '../constants';
import $ from 'jquery';

export default store => next => action => {
  const {callAPI, type, ...rest} = action;

  if (!callAPI) {
    return next(action);
  }

  next({
    ...rest, type: type + START
  });

  // api call
  setTimeout(() => {
    $.get(callAPI)
      .done(response => next({...rest, type: type + SUCCESS, response}))
      .fail(error => next({...rest, type: type + FAIL, error}))
    ;
  }, 1000);
}