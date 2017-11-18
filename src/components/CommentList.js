import React from 'react';
import Comment from './Comment';

export default (props) => {
    const {comments} = props;

    const commentComponent = comments.map(comment => {
        return <li key={comment.id}><Comment comment={comment} /></li>
    });

    return (
        <ul>
            {commentComponent}
        </ul>
    );
}