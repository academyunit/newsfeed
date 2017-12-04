import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ArticleList from './ArticleList/index';
import Chart from './Chart';
import Filters from './Filters/index';
import Counter from './Counter';
import {loadAllArticles} from '../AC/index';

class App extends Component {
  static propTypes = {
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

  componentDidMount() {
    this.props.loadAllArticles();
  }

  render() {
    return (
      <div>
        <Counter/>
        Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
        <Filters articles={[]}/>
        <ArticleList/>
        <Chart/>
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

export default connect(null, {loadAllArticles})(App);
