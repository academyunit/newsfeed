import React, {Component, PropTypes} from 'react';

class NewCommentForm extends Component {
  static propTypes = {
    user: PropTypes.string,
    text: PropTypes.string
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
    this.setState({
      user: '',
      text: ''
    });
  };

  handleChange = field => ev => {
    const {value} = ev.target;

    console.log(value);
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

export default NewCommentForm;