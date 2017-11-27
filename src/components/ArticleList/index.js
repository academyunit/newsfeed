import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Article from './../Article/index';
import accordion from '../../decorators/accordion';
import CSSTransition from 'react-addons-css-transition-group'
import './style.css';

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
          <CSSTransition component="ul"
                         transitionName="article-list"
                         transitionAppear={true}
                         transitionAppearTimeout={100}
                         transitionEnterTimeout={500}
                         transitionLeaveTimeout={300}
          >
            {articleComponents}
          </CSSTransition>
        );
    };
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
};

const mapPropsToState = ({articles, filters}) => {
  const { selected, dateRange: {from, to} } = filters;

  const filteredArticles = articles.filter(article => {
    const published = Date.parse(article.date);
    return (!selected.length || selected.includes(article.id) &&
        (!from || !to || (published > from && published < to)));
  });

  return {
    articles: filteredArticles
  };
};

export default connect(mapPropsToState)(accordion(ArticleList));