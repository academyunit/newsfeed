import React, {Component, PropTypes} from 'react';
import ArticleList from './ArticleList';
import Chart from './Chart';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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
      text: '',
      selected: null
    };
  }

  render() {
    const options = this.props.articles.map(article => ({
      value: article.id,
      label: article.title
    }));

    return (
      <div>
        <Select name="test-select" options={options} value={this.state.selected} onChange={this.handleSelectChange} multi={true}/>
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

  handleSelectChange = selected => {
    this.setState({selected});
  }
}

export default App;
