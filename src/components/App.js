import React, {Component, PropTypes} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {connect} from 'react-redux';
import ArticlesPage from './ArticlesPage';
import NotFound from './NotFound';
import Chart from './Chart';
import Filters from './Filters/index';
import Counter from './Counter';
import CommentsPage from './CommentsPage';
import Menu, {MenuItem} from './Menu/index';
import {loadAllArticles} from '../AC/index';
import history from '../history';

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
      <ConnectedRouter history={history}>
        <div>
          Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
          <Menu>
            <MenuItem path="/counter"/>
            <MenuItem path="/filters"/>
            <MenuItem path="/articles"/>
            <MenuItem path="/comments"/>
          </Menu>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/comments/:page" component={CommentsPage}/>
            <Redirect from="/comments" to="/comments/1"/>
            <Route path="/articles" component={ArticlesPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
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
