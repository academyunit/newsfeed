import React, {Component, PropTypes} from 'react';
import ArticleList from './ArticleList/index';
import Chart from './Chart';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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
        <DayPicker month={new Date(2018, 9)}/>
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
