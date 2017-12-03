import {createSelector} from 'reselect';

const getArticles = state => state.articles;
const getFilters = state => state.filters;

export const filteredArticlesSelector = createSelector(getArticles, getFilters, getFilteredArticles);

function getFilteredArticles(articles, filters) {
  console.log('calculating filtering...');
  const { selected, dateRange: {from, to} } = filters;

  return articles.filter(article => {
    const published = Date.parse(article.date);
    return (!selected.length || selected.includes(article.id) &&
    (!from || !to || (published > from && published < to)));
  });
}