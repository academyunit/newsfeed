import React, {Component, PropTypes} from 'react';
import ArticleList from './ArticleList';
import Chart from './Chart';

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  //state = {
  //  text: ''
  //};

  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div>
        Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
        <ArticleList articles={this.props.articles}/>
        <Chart articles={this.props.articles}/>
      </div>
    );
  };

  handleTextChange = ev => {
    const text = ev.target.value;

    if (text.length > 10) {
      return;
    }

    this.setState({
      text: text
    });
  };
}

export default App;
