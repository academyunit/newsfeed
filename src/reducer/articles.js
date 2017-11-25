import {articles} from '../fixtures';

export default (state = articles, action) => {
  const {type} = action;

  return articles;
}