import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {checkAndLoadArticleComments} from '../AC/index';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import NewCommentForm from './NewCommentForm';
import Loader from './Loader';

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    };

    static contextTypes = {
        user: PropTypes.string
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

    componentWillReceiveProps({isOpen, article, checkAndLoadArticleComments}) {
        if (isOpen && !this.props.isOpen) {
            checkAndLoadArticleComments(article.id);
        }
    }

    componentDidUpdate() {
        //console.log('CommentList componentDidUpdate()');
        this.size = this
          .container
          .getBoundingClientRect();

        //console.log(this.size);
    }

    render() {
        console.log('--' , 5);
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
        const {article, loaded, isOpen} = this.props;
        if (!isOpen) {
            return null;
        }
        if (!loaded) {
            return <Loader />
        }
        if (!article.comments || !article.comments.length) {
            return (<div>
                <h3>No comments yet</h3>
            </div>);
        }

        const commentItems = article.comments.map(id => <li key={id}><Comment id={id}/></li>);
        return (
          <div>
              User: {this.context.user}
              <ul>
                  {commentItems}
              </ul>
              <NewCommentForm articleId={article.id}/>
          </div>
        );
    }
}

export default connect((state, props) => ({
    loaded: state.articles.getIn(['entities', props.article.id, 'commentsLoaded'])
}), {checkAndLoadArticleComments}, null, {pure: false})(toggleOpen(CommentList))