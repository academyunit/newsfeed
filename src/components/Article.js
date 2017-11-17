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
                            ? this.props.content
                            : 'not available';
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
        console.log(e, 'here');
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}

export default Article;