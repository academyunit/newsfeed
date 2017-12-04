import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, FAIL, START} from '../constants';
import {Record, Map} from 'immutable';
import {arrToMap} from './util';

const ArticleModel = new Record({
  "id": null,
  "date": null,
  "title": null,
  "text": null,
  "comments": []
});

const DefaultReducerState = Record({
  entities: new Map({}),
  loading: false,
  error: null
});

export default (state = new DefaultReducerState(), action) => {
  const {type, payload, response, error, randomId} = action;

  switch(type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['entities', payload.id]);

    case ADD_COMMENT:
      return state.updateIn(['entities', payload.articleId, 'comments'], (comments) => comments.concat(randomId));

    case LOAD_ALL_ARTICLES + START:
      return state.set('loading', true);

    case LOAD_ALL_ARTICLES + SUCCESS:
      return state
        .mergeIn(['entities'], arrToMap(response, ArticleModel))
        .set('loading', false)
        ;

    case LOAD_ALL_ARTICLES + FAIL:
      return state
          .set('error', error)
          .set('loading', false)
          ;
  }

  return state;
}