import {normalizedComments} from '../fixtures';

export default (comments = normalizedComments, action) => {
  const {type, payload} = action;

  switch (type) {

  }

  return comments;
}