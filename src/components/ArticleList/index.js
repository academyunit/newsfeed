import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Article from './../Article/index';
import Loader from '../Loader';
import accordion from '../../decorators/accordion';
import CSSTransition from 'react-addons-css-transition-group';
import {filteredArticlesSelector} from '../../selectors/index';
import './style.css';

class ArticleList extends Component {
  static contextTypes = {
    user: PropTypes.string
  };
    render() {
      console.log('rendering ArticleList ...');
        const {articles, error, loading, isItemOpened, toggleOpenItem, match} = this.props;
        if (error) {
          return <h1>{error}</h1>;
        }
        if (loading) {
          return <Loader />
        }
        const articleComponents = articles.map(article =>
          <li key={article.id}>
             <Link to={`${match.url}/${article.id}`}>{article.title}</Link>
          </li>);

        return (
          <div>
            <h3>User: {this.context.user}</h3>
            <CSSTransition component="ul"
                           transitionName="article-list"
                           transitionAppear={true}
                           transitionAppearTimeout={100}
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
            >
              {articleComponents}
            </CSSTransition>
          </div>
        );
    };
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
};

const mapPropsToState = (state) => {
  return {
    articles: filteredArticlesSelector(state),
    loading: state.articles.loading,
    error: state.articles.error
  };
};

export default connect(mapPropsToState)(accordion(ArticleList));