import React, {Component, PropTypes} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import NewCommentForm from './NewCommentForm';

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    };

    componentWillMount() {
        //console.log('CommentList componentWillMount()');
    }

    componentDidMount() {
        //console.log('CommentList componentDidMount()');
    }

    componentWillUpdate() {
        //console.log('CommentList componentWillUpdate()');
    }

    componentDidUpdate() {
        //console.log('CommentList componentDidUpdate()');
        this.size = this
          .container
          .getBoundingClientRect();

        //console.log(this.size);
    }

    render() {
        const {isOpen, toggleOpen} = this.props;

        return (
          <div ref={this.getContainerRef}>
              <h2>Comments</h2>
              <button onClick={toggleOpen}>{isOpen ? 'Hide' : 'Show'} comments</button>
              {this.getBody()}
          </div>);
    }

    getContainerRef = (ref) => {
        this.container = ref;
        if (ref) {
            this.size = ref.getBoundingClientRect();

            //console.log(this.size);
        }
    };

    getBody() {
        if (!this.props.isOpen) {
            return '';
        }

        const {article} = this.props;
        if (!article.comments || !article.comments.length) {
            return (<div>
                <h3>No comments yet</h3>
            </div>);
        }

        const commentItems = article.comments.map(id => <li key={id}><Comment id={id}/></li>);
        return (
          <div>
              <ul>
                  {commentItems}
              </ul>
              <NewCommentForm articleId={article.id}/>
          </div>
        );
    }
}

export default toggleOpen(CommentList);