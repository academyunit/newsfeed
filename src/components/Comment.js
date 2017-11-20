import React, {Component} from 'react';

function Comment (props) {
    const {user, text} = props.comment;

    return (
        <section className="comment">
            <h2 className="comment__name">{user}</h2>
            <article className="comment__text">{text}</article>
        </section>
    );
}

export default Comment;