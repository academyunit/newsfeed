import React, {Component, PropTypes} from 'react';
import ArticleList from './ArticleList';
import Chart from './Chart';

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <ArticleList articles={this.props.articles}/>
        <Chart />
      </div>
    );
  }
}

export default App;
