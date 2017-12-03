import {combineReducers} from 'redux';
import articleReducer from './articles';
import countReducer from './counter';
import filters from './filters';
import comments from './comments';

export default combineReducers({
  articles: articleReducer,
  count: countReducer,
  filters,
  comments
});