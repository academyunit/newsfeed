import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../AC/index';

class NewCommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
  };

  state = {
    user: '',
    text: ''
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" value={this.state.user} onChange={this.handleChange('user')}/>
          <br />
          Comment: <textarea value={this.state.text} onChange={this.handleChange('text')}></textarea>
          <input type="submit"/>
        </form>
      </div>
    );
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const {articleId, addComment} = this.props;
    addComment(this.state, articleId);
    this.setState({
      user: '',
      text: ''
    });
  };

  handleChange = field => ev => {
    const {value} = ev.target;

    if (!validators[field](value)) {
      return;
    }

    this.setState({
      [field]: value
    });
  };
}

const validators = {
  text: (value) => value.length < 10,
  user: (value) => value.length < 10
};

export default connect(null, {addComment})(NewCommentForm);