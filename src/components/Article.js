import React, {Component, PropTypes} from 'react';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';

function Article(props) {
  const {article, isOpen, toggleOpen} = props;
  const body = isOpen
    ? <section className="post__content">
    {article.text}
    <CommentList comments={article.comments}/>
  </section>
    : '';

  return (
    <article className="post">
      <h2 className="post__title" onClick={toggleOpen}>{article.title}</h2>
      {body}
    </article>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
};

export default toggleOpen(Article);