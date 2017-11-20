import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    constructor() {
        super();
        //this.getContainerRef = this.getContainerRef.bind(this);
    }

    componentWillMount() {
        console.log('CommentList componentWillMount()');
    }

    componentDidMount() {
        console.log('CommentList componentDidMount()');
    }

    componentWillUpdate() {
        console.log('CommentList componentWillUpdate()');
    }

    componentDidUpdate() {
        console.log('CommentList componentDidUpdate()');
        this.size = this.container.getBoundingClientRect();
Вусщкфе
        console.log(this.size);
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

            console.log(this.size);
        }
    };

    getBody() {
        if (!this.props.isOpen) {
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
}

export default toggleOpen(CommentList);