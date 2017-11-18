import React, {Component} from 'react';

class Comment extends Component {
    constructor() {
        super();
    };

    render() {
        const {comment} = this.props;

        return (
            <section className="comment">
                <h2 className="comment__name">{comment.user}</h2>
                <article className="comment__text">{comment.text}</article>
            </section>
        );
    };
}

export default Comment;