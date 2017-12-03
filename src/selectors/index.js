import {createSelector} from 'reselect';

const getArticles = state => state.articles;
const getFilters = state => state.filters;
const getComments = state => state.comments;
const getId = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(getArticles, getFilters, getFilteredArticles);

export const createFindCommentSelector = () => createSelector(getComments, getId,
  (comments, id) => {
    console.log('rendering comments...', comments);
    return comments.find(comment => comment.id == id);
  }
);

function getFilteredArticles(articles, filters) {
  console.log('calculating filtering...');
  const { selected, dateRange: {from, to} } = filters;

  return articles.filter(article => {
    const published = Date.parse(article.date);
    return (!selected.length || selected.includes(article.id) &&
    (!from || !to || (published > from && published < to)));
  });
}