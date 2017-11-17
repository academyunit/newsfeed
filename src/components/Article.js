import React, {Component} from 'react';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };

        //this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen
                            ? article.text
                            : 'hidden text';
        return (
            <article>
                <h2 onClick={this.handleClick}>{article.title}</h2>
                <section>
                    {body}
                </section>
            </article>
        );
    }

    handleClick = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}

export default Article;