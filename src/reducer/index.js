import {combineReducers} from 'redux';
import articleReducer from './articles';
import countReducer from './counter';

export default combineReducers({
  articles: articleReducer,
  count: countReducer
});