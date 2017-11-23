import React, {Component, PropTypes} from 'react';
import ArticleList from './ArticleList/index';
import Chart from './Chart';
import Filters from './Filters/index';

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  state = {
    text: ''
  };

  constructor() {
    super();

    this.state = {
      text: '',
      selected: null
    };
  }

  render() {
    const {articles} = this.props;

    return (
      <div>
        Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
        <Filters articles={articles}/>
        <ArticleList articles={articles}/>
        <Chart articles={articles}/>
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
