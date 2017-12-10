import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import CommentList from './../CommentList';
import Loader from '../Loader';
import toggleOpen from '../../decorators/toggleOpen';
import CSSTransition from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import {deleteArticle, loadArticleById} from '../../AC/index';
import {articleByIdSelector} from '../../selectors/index';
import './style.css';

class Article extends Component {
  static contextTypes = {
    user: PropTypes.string
  };

  componentWillMount() {
    this.checkAndLoad(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAndLoad(nextProps);
  }

  checkAndLoad({article, loadArticleById, match}) {
    if (!article || (!article.text && !article.loading)) {
      loadArticleById(match.params.id);
    }
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    if (!article) {
      return null;
    }
    const body = isOpen
      ? <section className="post__content">
      <p>User: {this.context.user}</p>
      {article.text}
      {article.loading && <Loader/>}
      <CommentList article={article} ref={this.getCommentsList}/>
    </section>
      : '';

    return (
      <article className="post">
        <h2 className="post__title" onClick={toggleOpen}>{article.title}</h2>
        <a href="#" onClick={this.handleDelete}>delete me</a>
        <CSSTransition
          transitionName="article"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1500}
        >
          {body}
        </CSSTransition>
      </article>
    );
  };

  handleDelete = ev => {
    ev.preventDefault();

    const {article, deleteArticle} = this.props;
    deleteArticle(article.id);
  };

  getCommentsList = ref => {
    this.commentsList = ref;
  };

  componentDidUpdate() {
    //console.log('---', findDOMNode(this.commentsList));
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
};

function mapStateToProps(state, {match}) {
  return {
    article: articleByIdSelector(state, match.params)
  }
}

export default connect(mapStateToProps, { deleteArticle, loadArticleById })(Article);