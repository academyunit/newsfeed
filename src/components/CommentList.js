import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            isOpened: false
        };
    }

    render() {
        const {comments} = this.props;
        const {isOpened} = this.state;

        const commentTemplate = comments ? comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>) : '';
        const commentContent = commentTemplate || (<div>No comments</div>);
        const commentSection = isOpened ? (
            <div>
                <h3>Comments</h3>
                {commentContent}
            </div>
        ) : '';

        return (<div>
            <button onClick={this.toggleList}>{isOpened ? 'Hide comments' : 'Show comments'}</button>
            {commentSection}
        </div>);
    }

    toggleList = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }
}

export default CommentList;