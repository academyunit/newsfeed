import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

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
  const { id } = props;
  return {
    comment: state.comments.find(comment => comment.id == id)
  }
};

export default connect(mapStateToProps, {})(Comment);