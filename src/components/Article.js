import React, {Component} from 'react';
import CommentList from './CommentList';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            showComments: false
        };

        //this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const body = this.getContent();
        const showCommentsControl = this.getShowCommentsControl();
        const comments = this.getComments();

        return (
            <article className="post">
                <h2 className="post__title" onClick={this.handleClick}>{this.props.article.title}</h2>
                <section className="post__content">
                    {body}
                </section>
                {showCommentsControl}
                <section className="post__comments">
                    {comments}
                </section>
            </article>
        );
    }

    getShowCommentsControl() {
        if (!this.state.isOpen) {
            return '';
        }

        const buttonName = this.state.showComments ? 'Hide' : 'Show';
        return (
            <button type="button" onClick={this.handleCommentButtonClick}>{buttonName} comments</button>
        );
    }

    handleCommentButtonClick = (e) => {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    getComments() {
        if (!this.state.showComments) {
            return '';
        }

        return (
            <CommentList comments={this.props.article.comments} />
        );
    }

    getContent() {
        if (!this.state.isOpen) {
            return '';
        }

        return this.props.article.text;
    }

    handleClick = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}

export default Article;