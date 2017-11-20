import React, {Component, PropTypes} from 'react';
import Article from './Article';
import accordionList from '../decorators/accordionList';

class ArticleList extends Component {
    render() {
        const {articles, toggleOpen, openArticleId} = this.props;
        const articleComponents = articles.map(article =>
          <li key={article.id}>
              <Article article={article}
                       isOpen={openArticleId === article.id}
                       toggleOpen={toggleOpen(article.id)}/>
          </li>);

        return (
          <ul>
              {articleComponents}
          </ul>
        );
    };
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default accordionList(ArticleList);