import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import CommentList from './../CommentList';
import toggleOpen from '../../decorators/toggleOpen';
import CSSTransition from 'react-addons-css-transition-group';

class Article extends Component {
  render() {
    const {article, isOpen, toggleOpen} = this.props;
    const body = isOpen
      ? <section className="post__content">
      {article.text}
      <CommentList comments={article.comments} ref={this.getCommentsList}/>
    </section>
      : '';

    return (
      <article className="post">
        <h2 className="post__title" onClick={toggleOpen}>{article.title}</h2>
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

  getCommentsList = ref => {
    this.commentsList = ref;
  };

  componentDidUpdate() {
    //console.log('---', findDOMNode(this.commentsList));
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
};

export default Article;