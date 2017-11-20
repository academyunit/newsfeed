import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    state = {
        isOpen: false
    };

    render() {
        const {isOpen} = this.state;

        return (
            <div>
                {this.getBody()}
                <button onClick={this.toggleList}>{isOpen ? 'Hide' : 'Show'} comments</button>
            </div>);
    }

    getBody() {
        if (!this.state.isOpen) {
            return '';
        }

        const {comments} = this.props;
        if (!comments.length) {
            return (<div>
                <h3>No comments yet</h3>
            </div>);
        }

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
        return (
          <div>
              <ul>
                  {commentItems}
              </ul>
          </div>
        );
    }

    toggleList = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default CommentList;