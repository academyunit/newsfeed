import React, {Component} from 'react';

class CommentForm extends Component {
  state = {
    name: '',
    comment: ''
  };

  render() {
    return (
      <div>
        <form action="">
          Name: <input type="text" value={this.state.name} onChange={this.handleNameInput}/>
          <br />
          Comment: <textarea onChange={this.handleCommentInput}>{this.state.comment}</textarea>
          <input type="submit"/>
        </form>
      </div>
    );
  }

  handleNameInput = ev => {
    const value = ev.target.value;
    if (value.length > 10) {
      return;
    }
    this.setState({
      name: value
    });
  }

  handleCommentInput = ev => {
    const value = ev.target.value;
    if (value.length >=150) {
      return;
    }
    this.setState({
      comment: value
    });
  }
}

export default CommentForm;