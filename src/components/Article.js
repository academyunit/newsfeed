import React, {Component, PropTypes} from 'react';
import CommentList from './CommentList';

class Article extends Component {
    static propTypes = {
      article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
      }).isRequired
    };

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
                        ? <section className="post__content">
                            {article.text}
                            <CommentList comments={article.comments}/>
                          </section>
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