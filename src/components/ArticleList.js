import React, {Component, PropTypes} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';

class ArticleList extends Component {
    render() {
        const {articles, isItemOpened, toggleOpenItem} = this.props;
        const articleComponents = articles.map(article =>
          <li key={article.id}>
              <Article article={article}
                       isOpen={isItemOpened(article.id)}
                       toggleOpen={toggleOpenItem(article.id)}/>
          </li>);

        return (
          <ul>
              {articleComponents}
          </ul>
        );
    };
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
};

export default accordion(ArticleList);