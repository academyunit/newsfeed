import React, {Component, PropTypes} from 'react';

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
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;