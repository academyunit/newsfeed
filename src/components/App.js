import React, {Component, PropTypes} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import ArticlesPage from './ArticlesPage';
import NotFound from './NotFound';
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
      <Router>
        <div>
          Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles" component={ArticlesPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
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
