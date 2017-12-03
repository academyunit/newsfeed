import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createFindCommentSelector} from '../selectors/index';

function Comment (props) {
    const {user, text} = props.comment;

    return (
        <section className="comment">
            <h2 className="comment__name">{user}</h2>
            <article className="comment__text">{text}</article>
        </section>
    );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = (state, props) => {
  //console.log('searching comment...');
  const findCommentSelector = createFindCommentSelector();

  return (state, props) => {
    return {
      comment: findCommentSelector(state, props)
    };
  };
};

export default connect(mapStateToProps, {})(Comment);