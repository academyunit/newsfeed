import React, {Component} from 'react';
import CommentList from './CommentList';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const body = isOpen
                        ? <div><section className="post__content">{article.text}</section><CommentList comments={article.comments} /></div>
                        : '';

        return (
            <article className="post">
                <h2 className="post__title" onClick={this.handleClick}>{this.props.article.title}</h2>
                {body}
            </article>
        );
    }

    handleClick = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article;